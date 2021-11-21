const { activationTemplate } = require('./_activation')
const { forgotTemplate } = require('./_forgot-pass')
const { confirmationTemplate } = require('./_confirm')

const url = `${process.env.SERVER_URL}:${process.env.SERVER_PORT}`

const activation = ({ to, token }) => ({
  from: `" 🤟 equipo eCO2" ${process.env.MAIL_USER}`,
  to,
  subject: "Confirma tu correo",
  html: activationTemplate(token, url )
});

const confirmation = ({ to, username }) => ({
  from: `" 🤟 equipo eCO2" ${process.env.MAIL_USER}`,
  to,
  subject: `Tu cuenta ha sido verificada`,
  html: confirmationTemplate(username)
});

const forgotPass = ({ to, token }) => ({
  from: `" 🤟 equipo eCO2" ${process.env.MAIL_USER}`,
  to,
  subject: 'Contraseña olvidada',
  html: forgotTemplate(to, token, url)
});

module.exports = {
  activation,
  confirmation,
  forgotPass,
};
