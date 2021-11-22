const { guard } = require('../../middlewares/guard')

const router = require('express').Router()

module.exports = db => {

  router.get('/get-all', guard, require('./_get-all')(db))
  router.post('/donate', guard, require('./_donate')(db))

  return router
}