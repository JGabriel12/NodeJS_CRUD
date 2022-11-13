const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Test my app!')
})

app.listen(3000, () => {
  console.log('SERVER RUNNING IN http://localhost:3000')
})
