require("dotenv").config();
const slonik = require("slonik");

const slonikURL =
	process.env.NODE_ENV === "production"
		? process.env.HEROKU_URL
		: process.env.SLONIK_URL;

const db = slonik.createPool(slonikURL);

module.exports = db;
