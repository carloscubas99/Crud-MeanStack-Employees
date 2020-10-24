const employeeCtrl = {}

const { render } = require('../app')
const Employee = require('../models/Employee')

employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find()                             //devuelve un arreglo de empleados
    res.json(employees)
}
employeeCtrl.createEmployee = async(req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Employee Created'})
}
employeeCtrl.getEmployee = async(req, res) => {
    console.log(req.params)
    const employee = await Employee.findOne({_id: req.params.id})
    //Employee.findById(req.params.id) 
    res.send(employee)                                   //otra forma de obtener un id--> pasame un id para buscarlos y --> te paso el id
    res.send('getting one employee')
}
employeeCtrl.editEmployee = async(req, res) => {  
    await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:"Employee Updated"})
}
employeeCtrl.deleteEmployee = async(req,res) => {
     await Employee.findByIdAndDelete(req.params.id)
     res.send({status: 'Employee Deleted'})
     res.json('Employee Deleted')
}

module.exports = employeeCtrl;