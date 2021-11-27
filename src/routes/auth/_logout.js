const { auth } = require('../../database/queries/auth')

module.exports = (db) => async (req, res, next) => {

  const { email } = res.locals

  // console.info('> RES.HEADER: ', req.headers)
  // console.info('> RES.LOCALS: ', email)

  const query = await auth.updateSessionToken(db, { token: null, email })
  // console.info('> QUERY: ', query)

  res.status(200).json({
    success: true,
    data: "Logout",
  });
}