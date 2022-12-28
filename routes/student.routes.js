const express = require('express')
const router = express.Router()

const controller = require('../controllers/student.controller')

router.post('/studentSignup',controller.studentSignup)

module.exports = router;