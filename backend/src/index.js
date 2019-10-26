const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')

const preview = require('./routes/preview')

// Polyfill do Object.fromEntries do ES9
Object.fromEntries = entries => Object.assign({}, ...entries.map(([ key, value ]) => ({ [key]: value })))

const app = express()

dotenv.config()

app.use(cors())
app.use(bodyParser.json())

// Add preview route

app.use(preview)

app.listen(process.env.PORT, () => console.log(`Server is running at port ${process.env.PORT}`))