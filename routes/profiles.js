const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');


const router = express.Router()

router.get('/:id', asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id)
    const profileUser = await db.User.findOne({
        where: {
            id: userId
        },
        include: [ db.Comment, db.Extension ]
    })


    let extensionNames = profileUser.Extensions.map(extension => extension.name)

    res.render('profile-page', { title: "Profile Page", profileUser, req, extensionNames })
}))


router.get('/:id/edit', csrfProtection, asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id);
    const currentUserId = req.session.auth.userId;


    if(userId === currentUserId) {
        res.render('profile-edit', { title: 'Edit Profile', csrfToken: req.csrfToken() })
    } else {
        res.redirect(`/profiles/${userId}`)
    }
}))

router.patch('/:id/edit', csrfProtection, asyncHandler(async(req, res) => {
    const userId = req.params.id;
    const profileUser = await db.User.findByPk(userId)

    const {
        firstName,
        lastName,
        username,
        email,
        bio,
        avatarURL,
        password,
        confirmPassword
    } = req.body
}))


module.exports = router
