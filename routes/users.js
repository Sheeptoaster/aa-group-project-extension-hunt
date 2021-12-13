const express = require('express');
const session = require('express-session');
const db = require('../db/models')

const { loginUser, logoutUser, restoreUser, requireAuth } = require('../auth')

const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) => {
  console.log(db.Session)
  requireAuth(req, res, next)
  // res.send('res.locals.authenticated');
});

router.get('/login', (req, res) => {
  loginUser()
  res.render('login', { title: 'Login'})
})



module.exports = router;
