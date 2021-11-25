const { deserialize } = require('../helpers')
const { auth } = require('../database/queries/auth')
const db = require('../configs/db')

const guard = async (req, res, next) => {

  /*
   * condicional para los token de google ?
   * req.headers.google ? 
   * req.locals.google ? 
   * return next()
   */
  
  const { authorization } = req.headers
  if(!authorization){
    return next({
      statusCode: 401,
      error: new Error ('Unauthorized')
    })
  }
  
  const [ bearer, token ] = authorization.split(' ')
  if( bearer !== 'Bearer' || !token){
    return next({
      statusCode: 401,
      error: new Error ('Unauthorized')
    })
  }
  
  const user = deserialize(token)
  if(user === false){
    return next({
      statusCode: 401,
      error: new Error ('Unauthorized')
    })
  }
  
  const result = await auth.searchBySessionToken(db, { email: user.email, token})
  if(!result){
    return next({
      statusCode: 401,
      error: new Error ('Unauthorized')
    })
  }
  
  res.locals.email = result.email
  next()
}

module.exports = { guard }