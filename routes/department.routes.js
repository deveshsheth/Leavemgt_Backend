const express = require('express')
const router = express.Router()

const controller = require('../controllers/department.controller');

router.post('/adddepartment',controller.addDepartment);
router.get('/getdepartment',controller.getDepartment);
router.get('/getdepartmentbyid/:departmentid',controller.getDepartmentByID);
router.put('/updatedepartment',controller.updateDepartment);
router.delete('/deletedepartment/:departmentid',controller.deleteDepartment);


module.exports = router;