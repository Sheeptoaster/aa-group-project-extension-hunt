const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const { loginUser, logoutUser, requireAuth } = require('../auth');

const router = express.Router();

/* GET users listing. */
router.get('/', requireAuth, async (req, res, next) => {
	res.send('Testing')
});

/* GET sign-up page */
router.get('/sign-up', csrfProtection, asyncHandler(async (req, res) => {
	const user = await db.User.build();
	res.render('sign-up', {
		title: 'Sign Up',
		user,
		errors: [],
		csrfToken: req.csrfToken(),
	})
}))

/* POST sign-up */
let signUpValidation = [
	check('signupUsername')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a username')
		.isLength({ max: 50 })
		.withMessage('Username must be shorter than 50 characters')
		.custom(value => {
			return db.User.findOne({ where: { username: value } }).then(previousUser => {
				if (previousUser) {
					return Promise.reject("Username already taken.");
				} else {
					return;
				}
			})
		}),
	check('signupFirstName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a first name')
		.isLength({ max: 50 })
		.withMessage('First name must be shorter than 50 characters'),
	check('signupLastName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a last name')
		.isLength({ max: 50 })
		.withMessage('Last name must be shorter than 50 characters'),
	check('signupEmail')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a email')
		.isEmail()
		.withMessage('Please provide a valid email')
		.isLength({ max: 100 })
		.withMessage('Email must be shorter than 100 characters')
		.custom(value => {
			return db.User.findOne({ where: { email: value } }).then(previousUser => {
				if (previousUser) {
					return Promise.reject("Email already associated with an account.");
				} else {
					return;
				}
			})
		}),
	check('signupPassword')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
		.withMessage("Passwords must contain a lower case character, a upper case character, a number, and a special character (one of the following: !@#$%^&* )."),
	check("signupConfirmPassword")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Confirm Password")
		.custom((value, { req }) => {
			if (value !== req.body.signupPassword) {
				throw new Error("Confirm Password does not match password.")
			}
			return true;
		})
]

router.post("/sign-up", csrfProtection, signUpValidation, asyncHandler(async (req, res) => {
	const {
		signupFirstName,
		signupLastName,
		signupUsername,
		signupPassword,
		signupEmail
	} = req.body;
	console.log(req.body)
	const hashedPassword = await bcrypt.hash(signupPassword, 12);
	const user = await db.User.build({ firstName: signupFirstName, lastName: signupLastName, username: signupUsername, email: signupEmail, hashedPassword });
	const validatorErrors = validationResult(req);
	if (validatorErrors.isEmpty()) {
		await user.save();
		loginUser(req, res, user)
		res.redirect("/");
	} else {
		const errors = (validatorErrors.array().map(error => error.msg));
		res.render("sign-up", { errors, signupFirstName, signupLastName, signupUsername, signupEmail, csrfToken: req.csrfToken() });
	}
}))

/* POST logout page */
router.post("/logout", (req, res) => {
	logoutUser(req, res);
	res.redirect("/");
})

module.exports = router;
