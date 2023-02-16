const express = require('express')
const router = express.Router()

const controller = require('../controllers/role.controller')

const { check } = require('express-validator/check');

router.post('/addRole',check('rolename').not().isEmpty().trim().escape().withMessage("ROle cannot be empty.."), controller.addRole)
router.get('/getRole',controller.getRole)
router.get('/getRoleById/:id',controller.getRoleById)
router.put('/updateRole',controller.updateRole)
router.delete('/deleteRole/:id',controller.deleteRole)

module.exports = router;
