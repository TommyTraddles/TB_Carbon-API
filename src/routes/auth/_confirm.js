const { auth } = require("../../database/queries/auth");
const { mail } = require('../../configs/mailer')

module.exports = (db) => async (req, res, next) => {
  const { token } = req.params

  // all fields
  if (!token ) {
    return next({
      success: false, 
      error: new Error("All fields are mandatory"),
    });
  }

  // activate user
  const result = await auth.confirm(db, {token})
  if (result === false){
    return next({
      success: false, 
      error: new Error ('token not assigned to any user')
    })
  }

  // send email
  await mail.confirmationMail({ to: result.email, username: result.username})

  res.status(200).json({
    success: true,
    data: "user activated",
  });
}