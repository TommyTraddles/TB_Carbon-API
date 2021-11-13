const router = require('express').Router()

module.exports = db => {

  router.post('/register', require('./_register')(db))
  router.get('/confirmation/:token', require('./_confirm')(db))
  router.post('/forgot-pass', require('./_forgot-pass')(db))
  router.post('/password/request', require('./_reset-pass')(db))
  router.post('/login', require('./_login')(db))

  return router
}