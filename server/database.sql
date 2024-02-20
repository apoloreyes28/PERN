-- crear una Base de Datos y una tabla en PostgreSQL
CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
