const router = require('express').Router()
const { guard } = require('../../middlewares/guard')

module.exports = db => {

  // others
  router.post('/calculator', require('./_calculator')(db))
  router.get('/get-accumulated', require('./_get-accumulated')(db))
  router.get('/get-daily-completed', require('./_get-daily-completed')(db))
  router.get('/get-daily', require('./_get-daily')(db))

  return router
}