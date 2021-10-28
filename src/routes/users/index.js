const router = require('express').Router()

module.exports = db => {

  router.get(('/'), require('./_dummy')(db))

  return router
}