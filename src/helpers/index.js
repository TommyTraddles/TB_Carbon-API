const { encrypt, compare, confirm_token } = require('./hash')

module.exports = {
  hash: { encrypt, compare, confirm_token },
}