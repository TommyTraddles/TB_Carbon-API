const activation = ({ to, token }) => ({
  from: `" 🤟 eCO2" ${process.env.MAIL_USER}`,
  to,
  subject: "Confirma tu correo",
  html: `
  <h4> ☝️ Un último paso </h4>
  <p>
  Para acceder, haz clic 
    <a href="${process.env.SERVER_URL}:${process.env.SERVER_PORT}/auth/confirmation/${token}" target:"_blank">
    ${process.env.SERVER_URL}:${process.env.SERVER_PORT}/auth/confirmation/${token}
    </a>
  </p>
  `,
});

const confirmation = ({ to, username }) => ({
  from: `" 🤟 eCO2" ${process.env.MAIL_USER}`,
  to,
  subject: `Tu cuenta ha sido verificada`,
  html: `
    <h2> Gracias por registrarte ${username} </h2>
    <p> ${username}, esto es un template de plantilla </p>  
  `,
});

const forgotPass = ({ to, token }) => ({
  from: `" 🤟 eCO2" ${process.env.MAIL_USER}`,
  to,
  subject: 'Contraseña olvidada',
  html: `
  <h2>¿Has olvidado tu contraseña?</h2>
  <p>Haz clicl <a href="${process.env.SERVER_URL}:${process.env.SERVER_PORT}/auth/password/request?token=${token}&email=${to}"> aquí </a> para poder obtener una nueva contraseña</p>
  <p>Gracias por tu confianza</p>
  `,
});

module.exports = {
  activation,
  confirmation,
  forgotPass,
};
