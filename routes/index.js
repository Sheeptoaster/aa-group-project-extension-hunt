const express = require('express');
const db = require('../db/models')
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
	const extensions = await db.Extension.findAll({
		// include: db.Comment,
		order: [ ['id'] ],
		limit: 10
	});
	// console.log(extensions[0].Comments[0].content);
	res.render('home', { title: 'Extensions Home Page', extensions, csrfToken: req.csrfToken() });
}));

module.exports = router;
