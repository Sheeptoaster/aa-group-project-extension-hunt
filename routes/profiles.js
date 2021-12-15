const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');


const router = express.Router()

router.get('/:id', asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id)
    const user = await db.User.findOne({
        where: {
            id: userId
        },
        include: [ db.Comment, db.Extension ]
    })
    let extensionNames = user.Extensions.map(extension => extension.name)
    console.log(user.Extensions[0].name)
    res.render('profile-page', { title: "Profile Page", user, req, extensionNames, csrfToken: req.csrfToken() })
}))



module.exports = router
