const express = require('express')
const router = express.Router()

const controller = require('../controllers/department.controller')

const { check } = require('express-validator/check');

router.post('/addDepartment',check('departmentname').not().isEmpty().trim().escape().withMessage("Dept cannot be empty.."), controller.addDepartment)
router.get('/getDepartment',controller.getDepartment)
router.get('/getDepartmentById/:id',controller.getDepartmentById)
router.put('/updateDepartment',controller.updateDepartment)
router.delete('/deleteDepartment/:id',controller.deleteDepartment)

module.exports = router;
