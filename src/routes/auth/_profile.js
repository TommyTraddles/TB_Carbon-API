const { auth } = require("../../database/queries/auth");

module.exports = (db) => async (req, res, next) => {

  const { email } = res.locals

  const result = await auth.searchByEmail(db, { email })

  res.status(200).json({
    success: true,
    data: result,
  })
};
