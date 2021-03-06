const express = require("express");

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { asyncHandler, csrfProtection } = require("./utils.js");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const commentValidators = [
	check("content")
		.exists({ checkFalsy: true })
		.withMessage("Can't be blank")
		.isLength({ max: 255 })
		.withMessage("Comments must be shorter than 256 characters")
]

router.post("/", requireAuth, csrfProtection, commentValidators, asyncHandler(async (req, res) => {
	const { content, extensionId } = req.body;
	const userId = req.session.auth.userId;
	const validationErrors = validationResult(req);

	if (validationErrors.isEmpty()) {
		const comment = await db.Comment.create({ content, extensionId, userId });
		let user = await db.User.findByPk(userId);
		res.json({
			id: comment.id,
			username: user.username,
			profileURL: user.avatarURL
		});
	} else {
		const error = validationErrors.array()[0];
		res.json({ error });
	}
}))

router.post("/:id(\\d+)/delete", csrfProtection, asyncHandler(async (req, res) => {
	let commentId = parseInt(req.params.id)
	await db.Comment.destroy({
		where: {
			id: commentId
		}
	})
	return;
}))

router.post("/:id(\\d+)/edit", csrfProtection, commentValidators, asyncHandler(async (req, res) => {
	const commentId = parseInt(req.params.id)
	const userId = req.session.auth.userId;
	const {content} = req.body;

	const validationErrors = validationResult(req)

	if (validationErrors.isEmpty()) {
		const comment = await db.Comment.findByPk(commentId)
		comment.update({
			content: content
		});
		let user = await db.User.findByPk(userId);
		res.json({
			id: comment.id,
			username: user.username,
			profileURL: user.avatarURL
		});
	} else {
		const error = validationErrors.array()[0];
		res.json({ error })
	}
}))

module.exports = router;
