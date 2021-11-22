const router = require('express').Router()

module.exports = db => {

  router.get('/get-all', require('./_get-all')(db))
  router.post('/donate', require('./_donate')(db))

  return router
}