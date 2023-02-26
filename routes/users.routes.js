const express = require('express');
const routes = express.Router();

const controller = require('../controllers/users.controller')

routes.post('/addUser', controller.addUser)
routes.get('/getUser',controller.getUser)
routes.get('/getUserById/:id',controller.getUserById)
routes.put('/updateUser',controller.updateUser)
routes.delete('/deleteUser/:id',controller.deleteUser)

module.exports = routes