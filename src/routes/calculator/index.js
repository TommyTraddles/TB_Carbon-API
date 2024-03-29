const router = require('express').Router()
const { guard } = require('../../middlewares/guard')

module.exports = db => {

  // calculator
  router.post('/calculator', require('./_calculator')(db))
  router.get('/get-accumulated', guard, require('./_get-accumulated')(db))
  router.get('/get-daily-completed', guard, require('./_get-daily-completed')(db))
  router.get('/get-daily-results/:vertical', guard, require('./_get-daily-results')(db))
  router.get('/get-active-actions', guard, require('./_get-active-actions')(db))
  // actions
  router.get('/get-actions/:vertical', guard, require('./_get-actions')(db))
  router.post('/update-actions', guard, require('./_update-actions')(db))
  // logros
  router.get('/get-logros', guard, require('./_get-logros')(db))
  // dairy

  return router
}