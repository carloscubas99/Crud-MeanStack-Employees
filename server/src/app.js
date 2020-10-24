const express = require('express')       //express module to use a server
const morgan = require('morgan')         //exporting morgan
const cors = require('cors')

const app = express()                    //saving express in a constant app

app.set('port',process.env.PORT || 3000) //if in the so is there a port assigned for this app,use it, or use 3000

app.use(cors());
app.use(morgan('dev'))                   //using morgan for control of the request
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.use("/api/employees", require('./routes/employees.routes'))   //prefijo para la ruta de la api 


module.exports = app;                    //exporting app to call it elsewhere    