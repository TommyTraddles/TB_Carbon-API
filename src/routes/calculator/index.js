const router = require('express').Router()
const { guard } = require('../../middlewares/guard')

module.exports = db => {

  // others
  router.post('/calculator', require('./_calculator')(db))
  router.get('/get-accumulated', guard, require('./_get-accumulated')(db))
  router.get('/get-daily-completed', guard, require('./_get-daily-completed')(db))
  router.get('/get-daily', guard, require('./_get-daily')(db))

  return router
}