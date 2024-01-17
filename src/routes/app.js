const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const { connection } = require("../config.db");

const getEstudiantes = (request, response) => {
    connection.query("SELECT * FROM estudiantes",
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        });
};

//ruta
app.route("/estudiantes")
    .get(getEstudiantes);

const getProfesor = (request, response) => {
    connection.query("SELECT * FROM profesor",
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        });
};

//ruta
app.route("/profesor")
    .get(getProfesor);

const postEstudiante = (request, response) => {
    const { estudiante_id, nombre, apellido, fecha_nacimiento, telefono, codigo_postal, email } = request.body;
    connection.query("INSERT INTO estudiantes(estudiante_id,nombre, apellido, fecha_nacimiento, telefono, codigo_postal,email) VALUES (?,?,?,?,?,?,?,?)",
        [estudiante_id, nombre, apellido, fecha_nacimiento, telefono, codigo_postal, email],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Item añadido correctamente": results.affectedRows });
        });
};
//ruta
app.route("/estudiantes")
    .post(postEstudiante);


const postProfesor = (request, response) => {
    const { estudiante_id, nombre, apellido, fecha_nacimiento, telefono, codigo_postal, email } = request.body;
    connection.query("INSERT INTO estudiantes(profesor_id,nombre, apellido, fecha_nacimiento, telefono, codigo_postal,email,especialidad) VALUES (?,?,?,?,?,?,?,?,?)",
        [estudiante_id, nombre, apellido, fecha_nacimiento, telefono, codigo_postal, email],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Item añadido correctamente": results.affectedRows });
        });
};
//ruta
app.route("/profesor")
    .post(postProfesor);


const delEstudiantes = (request, response) => {
    const estudiante_id = request.params.estudiante_id;
    connection.query("Delete from estudiantes where estudiante_id = ?",
        [estudiante_id],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Item eliminado": results.affectedRows });
        });
};
//ruta
app.route("/estudiantes/:id")
    .delete(delEstudiantes);



const delProfesor = (request, response) => {
    const profesor_id = request.params.profesor_id;
    connection.query("Delete from estudiantes where profesor_id = ?",
        [profesor_id],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Item eliminado": results.affectedRows });
        });
};
//ruta
app.route("/profesor/:id")
    .delete(delProfesor);
    
module.exports = app;