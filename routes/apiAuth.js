const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser, restoreUser, requireAuth } = require('../auth');

const router = express.Router();

const loginValidators = [
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a username'),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a password')
]

router.post('/login',  loginValidators, asyncHandler(async (req, res) => {
	const {
		username,
		password
	} = req.body;

	let errors = [];
	const validatorErrors = validationResult(req);

	if (validatorErrors.isEmpty()) {
		const user = await db.User.findOne({ where: { username } });

		if (user !== null) {
			const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

			if (passwordMatch) {
				loginUser(req, res, user);
				// restoreUser(req,res, next)
				console.log(req.session.auth)
                res.json({user})
			}
		}

		errors.push('Login failed for the provided username and password');
	} else {
		errors = validatorErrors.array().map((error) => error.msg)
	}

	// res.render('login', {
	// 	username,
	// 	csrfToken: req.csrfToken(),
	// })
}))



module.exports = router
