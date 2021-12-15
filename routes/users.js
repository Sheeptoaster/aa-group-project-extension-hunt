const express = require('express');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const { loginUser, logoutUser, restoreUser, requireAuth } = require('../auth');

const router = express.Router();

/* GET users listing. */
router.get('/', requireAuth, async (req, res, next) => {
	res.send('Testing')
});

/* GET login page. */
router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
	res.render('login', { title: 'Login', csrfToken: req.csrfToken() })
}))


/* POST login page. */
const loginValidators = [
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a username'),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a password')
]

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
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
				return res.redirect('/');
			}
		}

		errors.push('Login failed for the provided username and password');
	} else {
		errors = validatorErrors.array().map((error) => error.msg)
	}

	res.render('login', {
		username,
		csrfToken: req.csrfToken(),
	})
}))

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
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a username')
		.isLength({ max: 50 })
		.withMessage('username must be shorter than 50 characters'),
	check('firstName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a first name')
		.isLength({ max: 50 })
		.withMessage('first name must be shorter than 50 characters'),
	check('lastName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a last name')
		.isLength({ max: 50 })
		.withMessage('last name must be shorter than 50 characters'),
	check('email')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a email')
		.isEmail()
		.withMessage('Please provide a valid email')
		.isLength({ max: 100 })
		.withMessage('email must be shorter than 100 characters'),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
		.withMessage("Passwords must contain a lower case character, a upper case character, a number, and a special character (one of the following: !@#$%^&* )."),
	check("confirmPassword")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Confirm Password")
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error("Confirm Password does not match password.")
			}
			return true;
		})
]

router.post("/sign-up", csrfProtection, signUpValidation, asyncHandler(async (req, res) => {
	const {
		firstName,
		lastName,
		username,
		password,
		confirmPassword,
		email
	} = req.body;
	//TODO #13 errors (if any are empty or if passwords don't match)
	const hashedPassword = await bcrypt.hash(password, 12);
	const user = await db.User.build({ firstName, lastName, username, email, hashedPassword });
	const validatorErrors = validationResult(req);
	if (validatorErrors.isEmpty()) {
		await user.save();
		res.redirect("/");//TODO #15 log user in
	} else { //TODO #14 display errors
		console.log(validatorErrors.array().map(error => error.msg));
		res.render("sign-up", { firstName, lastName, username, email, csrfToken: req.csrfToken() });
	}
}))

/* POST logout page */
router.post("/logout", (req, res) => {
	logoutUser(req, res);
	res.redirect("/users/login");
})

module.exports = router;
