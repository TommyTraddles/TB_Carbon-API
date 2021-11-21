const router = require('express').Router()

module.exports = db => {

  router.use('/', require('./app')(db))
  router.use('/user', require('./user')(db))

  return router
}