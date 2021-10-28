module.exports = async (req, res, next) => {
  
  const db = require('../configs/db')
  const { user } = require('../database/queries/auth')
  const { accessToken } = res.locals
  
  const result = await user(db)({ accessToken })
  if (result.error || !result) {
    return next({
      statusCode: 401,
      error: new Error(result.message),
    })
  }

  next()
}