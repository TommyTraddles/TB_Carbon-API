require('dotenv').config()

const { activation } = require('../helpers/templates')

const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport(process.env.MAIL_SMTP);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

module.exports = { 
  mail: { 
    activationMail: async({ to, token}) => {
      try {
        const template = activation({ to, token })
        return await transporter.sendMail(template)
      } catch (e) {
        console.info("> error at 'activationMail' helper: ", e.message)
        return false
      }
    }
  },
 }