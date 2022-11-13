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

// API Routes

// Users

app.post('/user/create', async (req, res) => {
  const { full_name, email, password } = req.body

  // if (!full_name) res.status(422).json({ Error: 'Name value cannot be null!' })

  const user = {
    full_name,
    email,
    password
  }

  try {
    await User.create(user)
    res.status(201).json({ Message: 'Create success!' })
  } catch (e) {
    res.status(500).json({ Error: e })
  }
})

// Index
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
