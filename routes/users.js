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

router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
	res.render('login', { title: 'Login', csrfToken: req.csrfToken() })
}))

//CREATE VALIDATION CHECK FUNCTION

router.post('/login', csrfProtection, asyncHandler(async (req, res) => {
	console.log('Test');
	//TODO Create Validation Check
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

router.get('/sign-up', csrfProtection, asyncHandler(async (req, res) => {
	const user = await db.User.build();
	res.render('sign-up', {
		title: 'Sign Up',
		user,
		errors: [],
		csrfToken: req.csrfToken(),
	})
}))

//TODO #11 sign-up validation
let signUpValidation = [
	//check()...
]

router.post("/sign-up", csrfProtection, asyncHandler(async (req, res) => {
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
		res.redirect("/users/sign-up", { firstName, lastName, username, email, csrfToken: req.csrfToken() });
	}
}))

router.post("/logout", (req, res) => {
	logoutUser(req, res);
	res.redirect("/users/login");
})

module.exports = router;
