const router = require('express').Router()

module.exports = db => {

  router.get('/get-user/:id', require('./_get-user')(db))
  router.post('/feedback', require('./_post-feedback')(db))

  return router
}