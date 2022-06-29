//libreria nodemoon para recetear el server -> yarn add nodemon -d  -> nodemon app.js

const express = require('express')
//nos deja la applicacion en la variable app
const app = express()



//Cada vez q llegue una peticion por la ruta principal nosetros vamos a querer q haga "algo" poniendo un controlador al lado con dos parametros la request(info de la peticion q llega de nuestro sv) y un objeto de respuesta(responder al navegador q nos llego la peticion)
app.get('/', (req,res) =>{

    console.log("peticion recibida");
    //responder algo!!!
    res.send('Hola mundo')

})

//hay q explicarle en q puerto va a estar corriendo la aplicacion (la escucha)
app.listen(4000, () =>{
    console.log("servidor escuchando en el puerto 400");
})