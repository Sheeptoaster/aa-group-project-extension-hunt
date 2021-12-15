const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');




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
    // }
}))

router.get('/:id', (req, res) => {

})



module.exports = router
