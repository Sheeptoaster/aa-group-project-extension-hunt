const express = require('express');
const db = require('../db/models')
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
	const extensions = await db.Extension.findAll({
		include: db.Category,
		order: [ ['id'] ],
		limit: 10
	});
	res.render('home', { title: 'Extension Hunt', extensions, csrfToken: req.csrfToken() });
}));

module.exports = router;
