const { auth } = require('../../database/queries/auth')
const { hash } = require('../../helpers')

module.exports = (db) => async (req, res, next) => {
  const { email, username, password } = req.body

  // all fields
  if (!email || !password || !username) {
    return next({
      success: false,
      error: new Error("All fields are mandatory"),
    });
  }

  // auth user
  const result = await auth.login(db, {email, username}, hash.compare(password) )
  if(result === false){
    return next({
      success: false,
      error: new Error('Credentials are not valid')
    })
  } 
  
  // LS token

  res.status(200).json({
    succes: true,
    data: result,
  });
}