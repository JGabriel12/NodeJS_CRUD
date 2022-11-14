// Module dependencies.
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

// Connection database - Emit
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.emit('success')
  })
  .catch(e => {
    console.log(e)
  })

// JSON config
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// API Routes
// User
app.use('/user', routes)
// Index
app.use('/', routes)

// Connection database - on
app.on('success', () => {
  app.listen(3000, () => {
    console.log('SERVER RUNNING IN http://localhost:3000')
  })
})
