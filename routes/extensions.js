const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const e = require('express');

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

router.post('/new', csrfProtection, extensionValidation, asyncHandler(async (req, res) => {
    const {
        newName,
        newDescription,
        newIconURL,
        newSlogan,
        categoriesCheckboxes
    } = req.body;
    console.log(req.body);
    const ownerId = req.session.auth.userId;
    const extension = await db.Extension.build({ name: newName, description: newDescription, iconURL: newIconURL, slogan: newSlogan, upvotes: 0, ownerId });

    const validatorErrors = validationResult(req)
    const categoryValues = Object.values(req.body);
    const categoryId = categoryValues.slice(5);
    if (validatorErrors.isEmpty()) {
        await extension.save();
        for (let i = 0; i < categoryId.length; i++) {
            await db.ExtensionCategories.create({ extensionId: extension.id, categoryId: categoryId[i] })
        }
        res.redirect('/')
    } else {
        const categories = await db.Category.findAll()
        const errors = (validatorErrors.array().map(error => error.msg));//TODO #66 catch sequelize unique errors
        res.render("create-extension", { errors, csrfToken: req.csrfToken(), title: "Create New Extension", categories });
    }
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
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
        extension,
        comments,
        csrfToken: req.csrfToken()
    });
}))

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const extension = parseInt(req.params.id);

    const extensions = await db.Extension.findByPk(extension)

    const categories = await db.ExtensionCategories.findAll({
        where: {
            extensionId: extension
        }
    })
    let categoryId = categories.map((category) => category.categoryId)

    const categoriesName = await db.Category.findAll()

    res.render('extension-edit', { title: 'Edit Extension', csrfToken: req.csrfToken(), extensions, categoriesName, categoryId })
}))

router.post('/:id(\\d+)/edit', csrfProtection, updateExtensionValidation, asyncHandler(async (req, res) => {
    const { editName, editDescription, editIconURL, editSlogan, categoriesCheckboxes } = req.body
    const extensionId = parseInt(req.params.id)


    const extension = await db.Extension.findByPk(extensionId)

    const categoryValues = Object.values(req.body)
    const selectedCategoryId = categoryValues.slice(5)

    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
        const updatedExtension = await extension.update({
            name: editName,
            description: editDescription,
            iconURL: editIconURL,
            slogan: editSlogan,
        })
        await extension.save()
        for (let i = 0; i < selectedCategoryId.length; i++) {
            const extensionCategory = await db.ExtensionCategories.findByPk(parseInt(selectedCategoryId[i]))
            const updatedExtensionCategory = await extensionCategory.update({
                extensionId: updatedExtension.id,
                categoryId: selectedCategoryId[i]
            })
            console.log(updatedExtensionCategory.id);
            await updatedExtensionCategory.save()
        }
        console.log('passed--------------------------');
        res.redirect('/');
    } else {
        const errors = (validatorErrors.array().map(error => error.msg));
        console.log('failed--------------------------');
        res.render('extension-edit', { errors, csrfToken: req.csrfToken(), editName, editDescription, editIconURL, editSlogan, categoriesCheckboxes })
    }
}))

router.post('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const extensionId = parseInt(req.params.id)

    const deletedExtension = await db.Extension.findByPk(extensionId)
    await deletedExtension.destroy()

    res.redirect('/')
}))

module.exports = router
