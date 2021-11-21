const jwt = require('jsonwebtoken')

const toJWT = (email) => {
  return jwt.sign({ email}, process.env.JWT_SECRET)
}

const fromJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (e) { 
    console.info("error at 'fromJWT' query :", e.message)
    return false
  }
}

module.exports = { toJWT, fromJWT }