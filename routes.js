const route = require('express').Router()
const userController = require('./src/controllers/userController')
const indexController = require('./src/controllers/indexController')

// User - Create
route.post('/create', userController.create)
// User - Read
route.get('/list', userController.list)
route.get('/:id', userController.listById)
// User - Update
route.patch('/:id', userController.update)
// User - Delete
route.delete('/:id', userController.delete)

// Index
route.get('/', indexController.index)

module.exports = route
