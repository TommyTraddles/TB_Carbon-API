const router = require('express').Router()

module.exports = db => {

  router.post(('/register'), require('./_register')(db))
  router.get('/confirmation/:token', require('./_confirm')(db))

  return router
}