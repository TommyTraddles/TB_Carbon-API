const router = require('express').Router()
const { guard } = require('../middlewares/guard')

module.exports = (db) => {
  
  router.use('/', require('./calculator')(db))
  router.use('/auth', require('./auth')(db))
  router.use('/ranking', require('./ranking')(db))
  router.use('/user', require('./user')(db))
  router.use('/initiatives', require('./initiatives')(db))

  return router
}