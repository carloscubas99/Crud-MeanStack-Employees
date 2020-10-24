require('./database')
const app = require('./app')        //llamando al archivo app que fue exportado en index.js
app.listen(app.get('port'));                   //escuchando en el puerto 3000
console.log('Server on port', app.get('port'));    


