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
		.withMessage('Please provide a password'),
]

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
	const {
		username,
		password,
	} = req.body;

	let errors = {
		usernameErrors: [],
		passwordErrors: []
	}
	const validatorErrors = validationResult(req);

	if (validatorErrors.isEmpty()) {
		const user = await db.User.findOne({ where: { username } });

		if (user !== null) {
			const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

			if (passwordMatch) {
				console.log("password matched");
				loginUser(req, res, user);
				res.json({ user })
				return
			}
		}

		errors.passwordErrors.push('Password does not match');
	} else {
		validatorErrors.array().forEach((error) => {
			if (/password/i.test(error.msg)) {
				errors.passwordErrors.push(error.msg);
			}
			if (/username/i.test(error.msg)) {
				errors.usernameErrors.push(error.msg);
			}
		})
	}
	res.status = 403
	res.json({ errors })
}))



module.exports = router
