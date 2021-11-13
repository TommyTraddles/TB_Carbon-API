const router = require('express').Router()

module.exports = db => {

  router.use('/', require('./app')(db))

  return router
}