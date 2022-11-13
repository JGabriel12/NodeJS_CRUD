// Module dependencies.
const express = require('express')
const app = express()

// JSON config
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// General

app.get('/', (req, res) => {
  res.send('Test my app!')
})

app.listen(3000, () => {
  console.log('SERVER RUNNING IN http://localhost:3000')
})
