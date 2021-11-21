const router = require('express').Router()
const passport = require('passport')
require('../../../configs/google.passport')

module.exports = db => {
  router.post('/register', require('./_register')(db))
  router.get('/confirmation/:token', require('./_confirm')(db))
  router.post('/forgot-pass', require('./_forgot-pass')(db))
  router.post('/password/request', require('./_reset-pass')(db))
  router.post('/login', require('./_login')(db))
  // others
  router.post('/calculator', require('./_calculator')(db))
  // sso
  router.use( passport.initialize());
  router.get('/google', passport.authenticate('google', { scope: ['email', 'profile']}))
  router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), require('./_google')(db))

  return router
}