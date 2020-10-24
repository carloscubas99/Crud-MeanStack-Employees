const { Schema,model} = require('mongoose') 
                                // schema para crear un modelo
const employeeSchema = new Schema({                                        //schema tiene la estructura que tienen los datos que seran guardados en la bd
    name:     {type: String, required: true},
    position: {type: String, required: true},
    office:   {type: String, required: true},
    salary:   {type: Number, required: true},
},{
    timestamps:true,
    versionKey: false                       //para cuando creemos un objecto, no le añada _
})

module.exports = model('Employee',employeeSchema)        //con la funcion model creamos un modelo llamado 'employee' utilizando employeeSchema y exportando finalmente