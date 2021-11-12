const activation = ({ to, token }) => ({
  from: `" 🔥 eCO2" ${process.env.MAIL_USER}`,
  to,
  subject: "Confirma tu correo",
  html: `
  <h4> ☝️ Un último paso </h4>
  <p>
  Para acceder, haz clic 
    <a href="${process.env.SERVER_URL}:${process.env.SERVER_PORT}/auth/confirmation/${token}">
        <button type="button""> Acá </button>
    </a>
  </p>
  `,
});


module.exports = {
  activation,
}

