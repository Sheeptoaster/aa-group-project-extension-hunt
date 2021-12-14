const express = require("express");

const db = require("../db/models");
const { asyncHandler } = require("./utils.js");

const router = express.Router();

router.post("/", asyncHandler(async (req, res) => {
	const { content, extensionId, userId } = req.body;
	//TODO error if content is empty
	const comment = await db.Comment.create({ content, extensionId, userId });
	res.json({ content, userId });
}))

module.exports = router;
