const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');




const router = express.Router()

router.get('/new', csrfProtection, asyncHandler(async (req, res) => {
	const categories = await db.Category.findAll()
	res.render('create-extension', { csrfToken: req.csrfToken(), title: "Create New Extension", categories })
}))


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
	const extensionId = parseInt(req.params.id);
	const extension = await db.Extension.findByPk(extensionId);
	const comments = await db.Comment.findAll({ where: { extensionId } })
	res.render("extension", {
		name: extension.name,
		descrption: extension.descrption,
		iconURL: extension.iconURL,
		comments //TODO #56 visual design of comments
	});
}))



module.exports = router
