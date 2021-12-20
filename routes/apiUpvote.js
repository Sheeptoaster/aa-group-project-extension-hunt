const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router()

router.patch('/', asyncHandler(async (req, res) => {
	if (res.locals.authenticated) {
		const { extensionId } = req.body

		const extension = await db.Extension.findByPk(extensionId);

		extension.upvotes++
		extension.save()

		res.json({
			upvotes: `${extension.upvotes}`
		})
	} else {
		res.json({});
	}
}))

module.exports = router
