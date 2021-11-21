const { auth } = require("../../database/queries/auth");
const { serialize } = require('../../helpers')

module.exports = (db) => async (req, res, next) => {

  res.redirect(process.env.CLIENT_URL)

  // res.status(200).json({
  //   success: true,
  // })
};
