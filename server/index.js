// importamos las librerias
const express = require("express");
const cors = require("cors");
const pool = require("./db");//  db.js

// esta variable 'app' tomará y ejecutará 
// mi biblioteca de express
const app = express();

// middleware
app.use(cors());
app.use(express.json());// convertir a formato JSON
// esto nos permite solicitar el body de la página web


// -- RUTAS --//

// create a todo (crear una tarea)


// get all todos


// get a todo


// update a todo


// delete a todo



// esto permite al programa escuchar al servidor
app.listen(5000, () => {
    console.log(`Server on port 5000`)
});

/*
Cada vez que estamos creando una app Full-Stack,
necesitamos obtener datos del lado del cliente y 
la única forma de obtener datos desde el lado del 
cliente es obtenerlos con el objeto 'request.body' 
*/