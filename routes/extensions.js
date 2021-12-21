const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');

const router = express.Router()

router.get('/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
	//Finds All Categories
	const categories = await db.Category.findAll()
	//Renders Create Extension Page
	res.render('create-extension', { csrfToken: req.csrfToken(), title: "Create New Extension", categories })
}))

const extensionValidation = [
	check("newName")
		.exists({ checkFalsy: true })
		.withMessage("Please provide an Extension Name")
		.isLength({ max: 50 })
		.withMessage("Extension Name must be shorter than 50 characters"),
	check("newDescription")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a description")
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
	const extension = await db.Extension.build({ name: newName, description: newDescription, iconURL: newIconURL, slogan: newSlogan, upvotes: 0, ownerId });

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
		res.render("create-extension", { errors, csrfToken: req.csrfToken(), title: "Create New Extension", categories });
	}
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
	const currentUserId = req.session.auth.userId;
	const extensionId = parseInt(req.params.id);
	const extension = await db.Extension.findByPk(extensionId);
	const comments = await db.Comment.findAll({
		where: { extensionId },
		include: {
			model: db.User,
			as: "User"
		}
	})
	res.render("extension", {
		currentUserId,
		extension,
		comments,
		csrfToken: req.csrfToken()
	});
}))

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
	let extensionId = parseInt(req.params.id);
	const extension = await db.Extension.findByPk(extensionId);
	const categories = await db.Category.findAll();
	const extensionCategories = await db.ExtensionCategories.findAll({
		where: { extensionId }
	})
	let categoryIds = extensionCategories.map((category) => category.categoryId)

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

const updateExtensionValidation = [
	check("editName")
		.exists({ checkFalsy: true })
		.withMessage("Please provide an Extension Name")
		.isLength({ max: 50 })
		.withMessage("Extension Name must be shorter than 50 characters"),
	check("editDescription")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a description")
];

//TODONOW checkboxes have duplicate id and value attributes
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
			for (const categoryId of categoryIds) {
				console.log(categoryId);
				await db.ExtensionCategories.create({ extensionId, categoryId })
			}
		}
		res.redirect(`/extensions/${extensionId}`);
	} else {
		const errors = validatorErrors.array().map(error => error.msg);
		const categories = await db.Category.findAll();
		res.render('extension-edit', {
			errors,
			csrfToken: req.csrfToken(),
			id: extensionId,
			extensionName: editName || extension.name,
			description: editDescription || extension.description,
			iconURL: editIconURL,
			slogan: editSlogan,
			categories,
			categoryIds: categoryIds || []
		})
	}
}))

router.post('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
	const extensionId = parseInt(req.params.id)

	const deletedExtension = await db.Extension.findByPk(extensionId)
	await deletedExtension.destroy()

	res.redirect('/')
}))

module.exports = router
