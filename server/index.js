// importamos las librerias
const express = require("express");
const cors = require("cors");

// esta variable 'app' tomará y ejecutará 
// mi biblioteca de express
const app = express();

// middleware
app.use(cors());
app.use(express.json());// convertir a formato JSON
// esto nos permite solicitar el body de la página web

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