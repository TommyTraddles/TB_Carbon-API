const router = require('express').Router()
const { guard } = require('../middlewares/guard')

module.exports = (db) => {
  
  router.use('/', require('./public')(db))
  router.use('/', guard, require('./private')(db))

  return router
}