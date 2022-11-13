// Module dependencies.
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

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

// Connection database
mongoose
  .connect(
    'mongodb+srv://GabrielMarinho:dVmyNHT49DZQQ20X@elearningcluster.oohsgbh.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(3000, () => {
      console.log('SERVER RUNNING IN http://localhost:3000')
    })
  })
  .catch(e => {
    console.log(e)
  })
