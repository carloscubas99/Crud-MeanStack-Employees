const { Router} = require('express')       //object to save routes 
const employeeCtrl = require('../controllers/employee.controller.js')
const router  = Router()                   //running it and putting it into an object

const employees = require('../controllers/employee.controller.js')

router.get('/',employeeCtrl.getEmployees)
router.post('/',employeeCtrl.createEmployee)
router.get('/:id',employeeCtrl.getEmployee)
router.delete('/:id',employeeCtrl.deleteEmployee)
router.put('/:id',employeeCtrl.editEmployee)

module.exports = router