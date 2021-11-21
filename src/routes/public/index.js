const router = require('express').Router()

module.exports = (db) => {
  
  router.use('/', require('./auth')(db))

  return router
}