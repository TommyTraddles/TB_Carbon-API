const { auth } = require('../../../database/queries/auth')
const { hash } = require('../../../helpers')

module.exports = (db) => async(req, res, next) => {
  const { token, email } = req.query
  const { pass, repeat } = req.body

  // all fields
  if (!token || !email || !pass || !repeat) {
    return next({
      success: false,
      error: new Error("All fields are mandatory"),
    });
  }
  
  // confirm token
  const result = await auth.searchByPasswordToken(db, {token, email})
  if(!result){
    return next({
      success: false,
      error: new Error("Invalid token")
    })
  }
  
  // reset pass
  const hashed = await hash.encrypt(pass)
  const query = await auth.reset(db, { email, hashed })

  res.status(200).json({
    success: true,
    data: "new password setup",
  });
}