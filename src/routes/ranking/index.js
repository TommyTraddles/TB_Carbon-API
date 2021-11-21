const router = require('express').Router()

module.exports = db => {

  router.get('/get-users', require('./_get-users')(db))
  router.get('/get-user/:id', require('./_get-user')(db))
  router.post('/get-comparative', require('./_get-comparative')(db))

  return router
}