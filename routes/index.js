const express = require('express');
const db = require('../db/models')
const { asyncHandler } = require('./utils')
const router = express.Router();

/* GET home page. */
router.get('/', asyncHandler(async(req, res, next) => {
	const extensions = await db.Extension.findAll({
		// include: db.Comment,
		order: [ ['id'] ],
		limit: 10
	});
	// console.log(extensions[0].Comments[0].content);
	res.render('home', { title: 'Extensions Home Page', extensions });
}));

module.exports = router;
