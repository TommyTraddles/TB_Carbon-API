const { sql } = require('slonik')

const test = db => async () => {
  console.info('testing query')
}

module.exports = {
  test,
}