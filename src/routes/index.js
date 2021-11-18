const router = require('express').Router()
const { guard } = require('../middlewares/guard')

module.exports = (db) => {
  
  router.use('/auth', require('./public')(db))
  router.use('/', guard, require('./private')(db))

  return router
}


/*

Cambiar: privado por público

Auth
App
User

*/

