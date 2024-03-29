const { auth } = require('../../database/queries/auth')
const { hash, serialize } = require('../../helpers')

module.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body

  // all fields
  if (!email || !password ) {
    return next({
      success: false,
      error: new Error("All fields are mandatory"),
    });
  }

  // auth user
  const result = await auth.login(db, {email }, hash.compare(password) )
  if(result === false){
    return next({
      success: false,
      error: new Error('Credentials are not valid')
    })
  } 
  
  // serialize token to send
  const token = serialize(email)
  await auth.updateSessionToken(db, {token, email})

  res.status(200).json({
    success: true,
    token,
  });
}