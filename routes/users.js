const express = require('express');
// const session = require('express-session');
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const { loginUser, logoutUser, restoreUser, requireAuth } = require('../auth');
// const { user } = require('pg/lib/defaults');

const router = express.Router();

/* GET users listing. */
router.get('/', requireAuth, async(req, res, next) => {
  res.send('Testing')
});

router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  res.render('login', { title: 'Login', csrfToken: req.csrfToken()})
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

  if(validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { username } });

    if(user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if(passwordMatch) {
        loginUser(req, res, user);
        return res.redirect('/');
      }
    }

    errors.push('Login failed for the provided username and password');
  } else {
    errors = validatorErrors.array().map((error) => error.msg)
  }

  res.redirect('/users/sign-up', {
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



module.exports = router;
