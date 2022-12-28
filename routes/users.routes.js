
const express = require('express')
const router = express.Router()

const controller = require('../controllers/users.controller')

router.post('/userSignup',controller.userSignup)
router.post('/userLogin',controller.userLogin)
router.get('/usersList',controller.usersList)
router.get('/GetUserById/:userid',controller.GetUserById)
router.put('/userUpdate/:userid',controller.userUpdate)

module.exports = router;
