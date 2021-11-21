const router = require('express').Router()

module.exports = db => {

  router.get('/', require('./_home')(db))

  return router
}