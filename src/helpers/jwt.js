const jwt = require('jsonwebtoken')

const toJWT = (email) => {
  return jwt.sign({ email}, process.env.JWT_SECRET)
}

const fromJWT = () => {

}

module.exports = { toJWT, fromJWT }