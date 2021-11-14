const { auth } = require("../../../database/queries/auth");
const { hash } = require('../../../helpers/index')
const { mail } = require('../../../configs/mailer')

module.exports = (db) => async (req, res, next) => {
  const { email, password, username } = req.body;

  // all fields
  if (!email || !password || !username) {
    return next({
      success: false,
      error: new Error("All fields are mandatory"),
    });
  }
  
  // create user
  const token = await hash.create_token()
  const hashed = await hash.encrypt(password)
  const result = await auth.register(db, { email, hashed, username, token });
  if (result === false) {
    return next({
      statusCode: 400,
      success: false,
      error: new Error("Email or Username taken"),
    });
  }
  
  // send confirmation mail
  await mail.activationMail({ to: email, token })
  
  res.status(200).json({
    success: true,
    data: "activation code sent",
  });
};
