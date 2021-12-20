const express = require('express');
const db = require('../db/models')
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
	const extensions = await db.Extension.findAll({
		include: db.Category,
		order: [ ['id', 'DESC'] ],
		limit: 10
	});
	//TODO #117 rendering home rejects a promise
	res.render('home', { title: 'Extension Hunt', extensions, csrfToken: req.csrfToken(), authenticated: !!res?.locals.authenticated });
}));

module.exports = router;
