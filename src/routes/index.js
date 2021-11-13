const router = require('express').Router()
const { guard } = require('../middlewares/guard')

module.exports = (db) => {
  
  router.use('/auth', require('./auth')(db))
  router.use('/', guard, require('./app')(db))

  return router
}