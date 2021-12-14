const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');




const router = express.Router()

router.get('/new', csrfProtection, asyncHandler(async(req, res) => {
    const categories = await db.Category.findAll()
    res.render('create-extension', { csrfToken: req.csrfToken(), title: "Create New Extension", categories })
}))


router.get('/:id', (req, res) => {

})



module.exports = router
