const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');
const category = require('../db/models/category');




const router = express.Router()

router.get('/new', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
    //Finds All Categories
    const categories = await db.Category.findAll()
    //Renders Create Extension Page
    res.render('create-extension', { csrfToken: req.csrfToken(), title: "Create New Extension", categories })
}))

router.post('/new', csrfProtection, asyncHandler(async(req, res) => {
    //Grabs All Input From Create Form
    //Category Checkboxes Creates Key Value Pairs For Checked Categories
    const {
        name,
        description,
        iconURL,
        categoriesCheckboxes
    } = req.body;
    //Grabs userId of Currently Logged In User
    const ownerId = req.session.auth.userId;
    //Builds New Extension Instance
    const extension = await db.Extension.build({ name, description, iconURL, upvotes: 0, ownerId });

    // const validatorErrors = validationResult(req)
    //Grabs Values from req.body Object and Returns Values In Array
    const categoryValues = Object.values(req.body);
    //Removes First 4 Values in Obj (csrfToken, name, description, and bio)
    const categoryId = categoryValues.slice(4);
    //TODO VALIDATION CHECK
    // if(validatorErrors.isEmpty()) {
        //Saves extension instance
        await extension.save();
        //Loops Through Array Of Checked Values For Extension Id
        for(let i = 0; i < categoryId.length; i++) {
            //Creates Extension Category Instance for Join Table
            await db.ExtensionCategories.create({ extensionId: extension.id, categoryId: categoryId[i] })
        }
        res.redirect('/')
    // }
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
	const extensionId = parseInt(req.params.id);
	const extension = await db.Extension.findByPk(extensionId);
	const comments = await db.Comment.findAll({ where: { extensionId } })
	res.render("extension", {
        extension,
		name: extension.name,
		descrption: extension.descrption,
		iconURL: extension.iconURL,
		comments, //TODO #56 visual design of comments
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

router.post('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const { name, description, iconURL, categoriesCheckboxes } = req.body
    const extensionId = parseInt(req.params.id)

    const extension = await db.Extension.findByPk(extensionId)

    const categoryValues = Object.values(req.body)
    const categoryId = categoryValues.slice(4)

    const updatedExtension = await extension.update({
        name,
        description,
        iconURL
    })

    for (let i = 0; i < categoryId.length; i++) {
        let extensionCategory = await db.ExtensionCategories.findByPk(parseInt(categoryId[i]))
        await extensionCategory.update({
            extensionId: updatedExtension.id,
            categoryId: categoryId[i]
        })
    }
    res.redirect('/')
}))

router.delete('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const extensionId = parseInt(req.params.id)

    const deletedExtension = await db.Extension.findByPk(extensionId)
    await deletedExtension.destroy()

    res.redirect('/')
}))

module.exports = router
