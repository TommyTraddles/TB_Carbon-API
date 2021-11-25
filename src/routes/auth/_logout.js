const { auth } = require('../../database/queries/auth')

module.exports = (db) => async (req, res, next) => {

  console.info('> HERE YOU CAN SEE IT WORKS ')

  const { email } = res.locals
  await auth.updateSessionToken(db, { token: null, email })

  console.info('> user: ', user)

  res.status(200).json({
    success: true,
    data: "Logout",
  });
}