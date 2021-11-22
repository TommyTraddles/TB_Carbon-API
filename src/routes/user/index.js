const { guard } = require('../../middlewares/guard')

const router = require('express').Router()

module.exports = db => {

  router.get('/get-user/:id', guard, require('./_get-user')(db))
  router.post('/feedback', guard, require('./_post-feedback')(db))

  return router
}