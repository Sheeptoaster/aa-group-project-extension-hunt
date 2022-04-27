const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const { Op } = require('sequelize');

const router = express.Router()

router.get('/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
	//Finds All Categories
	const categories = await db.Category.findAll()
	//Renders Create Extension Page
	res.render('create-extension', { csrfToken: req.csrfToken(), title: "Create New Extension", categories, categoryIds: [] })
}))

const extensionValidation = [
	check("newName")
		.exists({ checkFalsy: true })
		.withMessage("Please provide an Extension Name")
		.isLength({ max: 50 })
		.withMessage("Extension Name must be shorter than 50 characters"),
	check("newDescription")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a description"),
	check("categoryIds")
		.exists({ checkFalsy: true })
		.withMessage("Please select extension categories")
];

router.post('/new', csrfProtection, extensionValidation, asyncHandler(async (req, res) => {
	const {
		newName,
		newDescription,
		newIconURL,
		newSlogan,
		categoryIds
	} = req.body;
	const ownerId = req.session.auth.userId;
	const extension = await db.Extension.build({ name: newName, description: newDescription, iconURL: newIconURL || `/images/extensionIcons/placeholderIcon.png`, slogan: newSlogan, upvotes: 0, ownerId });

	const validatorErrors = validationResult(req)
	if (validatorErrors.isEmpty()) {
		await extension.save();
		for (let i = 0; i < categoryIds.length; i++) {
			await db.ExtensionCategories.create({ extensionId: extension.id, categoryId: categoryIds[i] })
		}
		res.redirect('/')
	} else {
		const categories = await db.Category.findAll();
		const errors = validatorErrors.array().map(error => error.msg);
		res.render("create-extension", { name: newName, description: newDescription, errors, csrfToken: req.csrfToken(), title: "Create New Extension", categories, categoryIds: categoryIds || [] });
	}
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
	const extensionId = parseInt(req.params.id);
	const extension = await db.Extension.findOne({
		where: { id: extensionId },
		include: ["owner", db.Category, "upvotes"]
	});
	const comments = await db.Comment.findAll({
		where: { extensionId },
		include: {
			model: db.User,
			as: "User"
		}
	})

	return res.render('extension', {
		title: `Extension Hunt - ${extension.name}`,
		user: res.locals?.user,
		extension,
		comments,
		csrfToken: req.csrfToken(),
	});
}))

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
	let extensionId = parseInt(req.params.id);
	const extension = await db.Extension.findByPk(extensionId);
	const categories = await db.Category.findAll();
	const extensionCategories = await db.ExtensionCategories.findAll({
		where: { extensionId }
	})
	let categoryIds = extensionCategories.map((category) => category.dataValues.categoryId);

	res.render('extension-edit', {
		errors: [],
		csrfToken: req.csrfToken(),
		id: extension.id,
		extensionName: extension.name,
		description: extension.description,
		iconURL: extension.iconURL,
		slogan: extension.slogan,
		categories,
		categoryIds
	})
}))

router.get("/search/:searchTerm", csrfProtection, asyncHandler(async (req, res) => {
	const { searchTerm } = req.params;
	const extensions = await db.Extension.findAll({
		where: {
			[Op.or]: [
				{ name: { [Op.iLike]: `%${searchTerm}%` } },
				{ slogan: { [Op.iLike]: `%${searchTerm}%` } }
			]
		},
		include: ["owner", db.Category, "upvotes"],
		limit: 10
	})
	res.json({ heading: `Search: ${searchTerm}`, extensions, authenticated: !!res?.locals.authenticated, userId: req.session?.auth?.userId });
}))

const updateExtensionValidation = [
	check("editName")
		.exists({ checkFalsy: true })
		.withMessage("Please provide an Extension Name")
		.isLength({ max: 50 })
		.withMessage("Extension Name must be shorter than 50 characters"),
	check("editDescription")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a description"),
	check("categoryIds")
		.exists({ checkFalsy: true })
		.withMessage("Please select extension categories")
];

router.post('/:id(\\d+)/edit', csrfProtection, updateExtensionValidation, asyncHandler(async (req, res) => {
	const { editName, editDescription, editIconURL, editSlogan, categoryIds } = req.body;
	const extensionId = parseInt(req.params.id);
	const extension = await db.Extension.findByPk(extensionId);

	const validatorErrors = validationResult(req);
	if (validatorErrors.isEmpty()) {
		await extension.update({
			name: editName,
			description: editDescription,
			iconURL: editIconURL,
			slogan: editSlogan,
		})
		await extension.save()

		// Update categories
		const extensionCategories = await db.ExtensionCategories.findAll({
			where: { extensionId }
		})
		extensionCategories.forEach(async row => {
			await row.destroy();
		})
		if (categoryIds) {
			let idArray = categoryIds;
			if (!Array.isArray(categoryIds)) {
				idArray = [categoryIds];
			}
			for (const categoryId of idArray) {
				await db.ExtensionCategories.create({ extensionId, categoryId })
			}
		}
		res.redirect(`/extensions/${extensionId}`);
	} else {
		const errors = validatorErrors.array().map(error => error.msg);
		const categories = await db.Category.findAll();
		const extensionCategories = await db.ExtensionCategories.findAll({
			where: { extensionId }
		})
		let idArray = extensionCategories.map(extensionCategory => {
			return extensionCategory.dataValues.categoryId;
		});
		res.render('extension-edit', {
			errors,
			csrfToken: req.csrfToken(),
			id: extensionId,
			extensionName: editName || extension.name,
			description: editDescription || extension.description,
			iconURL: editIconURL,
			slogan: editSlogan,
			categories,
			categoryIds: idArray
		})
	}
}))

router.post('/delete/:id(\\d+)', asyncHandler(async (req, res, next) => {
	const extensionId = parseInt(req.params.id)

	await db.ExtensionUpvote.destroy({
		where: {
			extensionId
		}
	})

	await db.ExtensionCategories.destroy({
		where: {
			extensionId
		}
	})

	const deletedRecord = await db.Extension.destroy({
		where: {
			id: extensionId
		}
	})
		.then(async function (deletedRecord) {
			if (deletedRecord === 1) {
				await db.Comment.destroy({
					where: {
						extensionId
					}
				})
				res.redirect('/')
			} else {
				return next(err)
			}
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
}))

module.exports = router
