const router = require('express').Router()

module.exports = db => {

  router.post(('/register'), require('./_register')(db))

  return router
}