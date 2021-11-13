const { auth } = require("../../../database/queries/auth");
const { serialize } = require('../../../helpers')

module.exports = (db) => async (req, res, next) => {

  console.info('> Not working ')

  // LS token // cookie
  const token = serialize(email);
  await auth.updateSessionToken(db, { token, email });

  res.status(200).json({
    succes: true,
    token,
  });
};
