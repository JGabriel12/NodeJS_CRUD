const mongoose = require('mongoose')

const User = mongoose.model('User', {
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = User
