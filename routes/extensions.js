const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');




const router = express.Router()

router.get('/new', csrfProtection, asyncHandler((req, res) => {

    res.render('create-extension', { title: "Create New Extension"})
}))


router.get('/:id', (req, res) => {

})



module.exports = router
