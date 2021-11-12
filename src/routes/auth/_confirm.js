const { auth } = require("../../database/queries/auth");
const { mail } = require('../../configs/mailer')

module.exports = (db) => async (req, res, next) => {
  const { token } = req.params

  // activate user
  const result = await auth.activate(db, {token})
  if (result === false){
    return next({
      statusCode: 400,
      error: new Error ('token not assigned to any user')
    })
  }

  // send email
  await mail.confirmationMail({ to: result.email, username: result.username})

  res.status(200).json({
    succes: true,
    data: "user activated",
  });
}