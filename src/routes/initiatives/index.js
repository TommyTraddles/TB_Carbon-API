const { guard } = require('../../middlewares/guard')

const router = require('express').Router()

module.exports = db => {

  router.get('/get-all', require('./_get-all')(db))
  router.get('/get-one/:id', require('./_get-one')(db))
  router.post('/donate', require('./_donate')(db))

  return router
}