const { register } = require('../../helpers/queries/auth')

module.exports = db => async (req, res, next) => { 

  const { email, password, username } = req.body
  
  // all fields


  // create user
  const hash = password
  const token = 'hello'
  const result = await register(db, {email, hash, username, token})

  if (result === false) {
    return next({
      statusCode: 400,
      error: new Error ('Cannot create user')
    })
  }

  // send confirmation mail



  res.status(200)
    .json({
      succes: true,
      data: 'created',
    })

}