const express = require("express");

const db = require("../db/models");
const { requireAuth } = require("../auth");
const { asyncHandler } = require("./utils.js");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const commentValidators = [
	check("content")
		.exists({ checkFalsy: true })
		.withMessage("Can't be blank")
		.isLength({ max: 255 })
		.withMessage("Comments must be shorter than 256 characters")
]

router.post("/", requireAuth, commentValidators, asyncHandler(async (req, res) => {
	const { content, extensionId } = req.body;
	const userId = req.session.auth.userId;
	let validationErrors = validationResult(req);

	if (validationErrors.isEmpty()) {
		await db.Comment.create({ content, extensionId, userId });
		let user = await db.User.findByPk(userId);
		res.json({
			userName: user.username
		});
	} else {
		const error = validationErrors.array()[0];
		res.json({ error });
	}
}))

module.exports = router;
