console.clear()

require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const app = express()
const db = require('./configs/db')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

app.use(require('./routes')(db))
app.use(require('./middlewares/path-not-found'))
app.use(require('./middlewares/error-handler'))

app.listen(process.env.SERVER_PORT || 3001, () => console.info("> ✅ Server up"))