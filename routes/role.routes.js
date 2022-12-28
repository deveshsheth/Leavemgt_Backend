const express = require('express')
const router = express.Router()

const controller = require('../controllers/role.controller')

router.post('/addRole', controller.createRole)
router.get('/getRole',controller.getRole)
router.get('/getRoleByID/:roleid',controller.getRoleByID)
router.put('/updateRole/:roleid',controller.updateRole)
router.delete('/deleteRole/:roleid',controller.deleteRole)

module.exports = router;
