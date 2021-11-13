const { encrypt, compare, create_token } = require('./hash')
const { toJWT, fromJWT } = require('./jwt')

const serialize = (email) => {
  return toJWT(email)
}

const deserialize = () => {

}

module.exports = {
  hash: { encrypt, compare, create_token },
  serialize, 
  deserialize,
}