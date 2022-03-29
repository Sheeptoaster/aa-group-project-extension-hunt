const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router()

router.patch('/upvote', asyncHandler(async (req, res) => {
	if (res.locals.authenticated) {
		const { extensionId } = req.body

		await db.ExtensionUpvote.create({ extensionId, userId: req.session.auth.userId });
		let upvotes = await db.ExtensionUpvote.findAll({
			where: { extensionId }
		})

		res.json({
			upvotes: upvotes.length
		})
	} else {
		res.json({});
	}
}))

router.patch('/downvote', asyncHandler(async (req, res) => {
	if (res.locals.authenticated) {
		const { extensionId } = req.body

		let upvote = await db.ExtensionUpvote.findOne({ where: { extensionId, userId: req.session.auth.userId } });
		await upvote.destroy(); //TODONOW test
		let upvotes = await db.ExtensionUpvote.findAll({
			where: { extensionId }
		})

		res.json({
			upvotes: upvotes.length
		})
	} else {
		res.json({});
	}
}))

module.exports = router;
