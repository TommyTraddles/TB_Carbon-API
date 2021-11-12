const { encrypt, compare, create_token } = require('./hash')

module.exports = {
  hash: { encrypt, compare, create_token },
}