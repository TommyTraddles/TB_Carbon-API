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
  subject: `${username}, tu cuenta ha sido verificada`,
  html: `
    <h2> Gracias por registrarte ${username} </h2>
    <p> ${username}, esto es un template de plantilla </p>  
  `,
});

module.exports = {
  activation,
  confirmation,
};
