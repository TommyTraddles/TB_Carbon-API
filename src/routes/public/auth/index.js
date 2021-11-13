const router = require('express').Router()
const passport = require('passport')
require('../../../configs/google.passport')

module.exports = db => {
  router.post('/register', require('./_register')(db))
  router.get('/confirmation/:token', require('./_confirm')(db))
  router.post('/forgot-pass', require('./_forgot-pass')(db))
  router.post('/password/request', require('./_reset-pass')(db))
  router.post('/login', require('./_login')(db))
  // sso
  router.use( passport.initialize());
  router.get('/google', passport.authenticate('google', { scope: ['email', 'profile']}))
  // doesn't upload session_token on Header or DB // serialize conflict ?
  router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), require('./_google')(db))

  return router
}