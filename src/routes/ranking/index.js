const { guard } = require('../../middlewares/guard')
const router = require('express').Router()

module.exports = db => {

  router.get('/get-users', guard, require('./_get-users')(db))
  router.get('/get-user/:id', guard, require('./_get-user')(db))
  router.post('/get-comparative', guard, require('./_get-comparative')(db))

  return router
}