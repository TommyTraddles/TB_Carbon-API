const { register } = require("../../database/queries/auth");
const { hash } = require('../../helpers/index')

module.exports = (db) => async (req, res, next) => {
  const { email, password, username } = req.body;

  // all fields
  if (!email || !password || !username) {
    return next({
      error: new Error("All fields are mandatory"),
    });
  }

  // create user
  const hashed = await hash.encrypt(password)
  const token = await hash.confirm_token()
  const result = await register(db, { email, hashed, username, token });
  if (result === false) {
    return next({
      statusCode: 400,
      error: new Error("Cannot create user"),
    });
  }

  // send confirmation mail

  res.status(200).json({
    succes: true,
    data: "created",
  });
};
