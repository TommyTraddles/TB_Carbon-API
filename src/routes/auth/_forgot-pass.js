const { auth } = require("../../database/queries/auth");
const { hash } = require("../../helpers");
const { mail } = require("../../configs/mailer");

module.exports = (db) => async (req, res, next) => {
  const { email, username } = req.body;

  // all fields
  if (!email || !username) {
    return next({
      succes: false, 
      error: new Error("All fields are mandatory"),
    });
  }

  // retrieve user
  const result = await auth.searchByEmail(db, { email, username });
  if (!result) {
    return next({
      succes: false, 
      error: new Error("Something went wrong"),
    });
  }

  // create reset token
  const token = await hash.create_token();
  await auth.forgot(db, { email, token });
  await mail.forgotMail({ to: email, token });

  res.status(200).json({
    succes: true,
    data: "email sent",
  });
};
