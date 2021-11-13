const router = require('express').Router()

module.exports = db => {

  router.get('/logout', require('./_logout')(db))

  return router
}