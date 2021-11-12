require('dotenv').config()

const { activation, confirmation, forgotPass } = require('../helpers/templates')
const { catcher } = require('../utils')

const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport(process.env.MAIL_SMTP);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const send = transporter.sendMail.bind(transporter)

const mail = { 
  activationMail: async ({ to, token }) => {
    await catcher(send)(activation({ to, token }))
  },
  confirmationMail: async ({ to, username }) => {
    await catcher(send)(confirmation({to, username}))
  },
  forgotMail: async ({ to, token }) => {
    await catcher(send)(forgotPass({to, token}))
  },
}

module.exports = { mail }