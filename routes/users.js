const express = require('express');
const session = require('express-session');
const db = require('../db/models')

const { loginUser, logoutUser, restoreUser, requireAuth } = require('../auth');
const { user } = require('pg/lib/defaults');

const router = express.Router();

/* GET users listing. */
router.get('/', requireAuth, async(req, res, next) => {
  res.send('Testing')
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login'})
})



module.exports = router;
