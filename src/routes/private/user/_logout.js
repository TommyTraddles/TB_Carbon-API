const { auth } = require('../../../database/queries/auth')

module.exports = (db) => async (req, res, next) => {

  const { user } = res.locals
  await auth.updateSessionToken(db, { token: null, email: user.email })

  res.status(200).json({
    succes: true,
    data: "Logout",
  });
}