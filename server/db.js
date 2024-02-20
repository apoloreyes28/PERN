// esto nos va permitir conectarnos a nuestra Base de Datos

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "apolo28",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;