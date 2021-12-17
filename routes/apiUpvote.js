const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router()

router.patch('/', asyncHandler(async (req, res) => {
    const { extensionId } = req.body

    const extension = await db.Extension.findByPk(extensionId);
    extension.save()

    res.json({
        upvotes: `${extension.upvotes}`
    })
}))

module.exports = router
