// Module dependencies.
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const User = require('./src/models/User')

// JSON config
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// General

app.get('/', (req, res) => {
  res.json({ message: 'Test my app!' })
})

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
