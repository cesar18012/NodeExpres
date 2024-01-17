# Proyecto de API con Node.js, Express y MySQL

Este proyecto implementa una API RESTful utilizando Node.js, Express y MySQL para gestionar información sobre estudiantes y profesores.

## Configuración del entorno con Docker y MySQL

Para ejecutar el proyecto localmente, puedes utilizar Docker Compose para configurar un contenedor MySQL.

### Docker Compose

Asegúrate de tener Docker y Docker Compose instalados en tu máquina. Luego, crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
DBHOST=localhost
DBUSER=root
DBPASS=password
DBNAME=node
DBPORT=3008
PORT=3300


##1. docker-compose.yml
Este archivo define la configuración para Docker Compose. Se utiliza para orquestar los contenedores de Docker necesarios para ejecutar tu aplicación. Aquí hay una explicación más detallada:

version: '3': Indica la versión de Docker Compose que se utilizará.
services: Define los servicios que compondrán la aplicación.
mysql: Define un servicio para un contenedor MySQL.
image: mysql:latest: Utiliza la última imagen de MySQL disponible en Docker Hub.
container_name: mysql-container: Asigna un nombre al contenedor.
environment: Configura las variables de entorno necesarias para MySQL, como la contraseña y el usuario.
ports: Mapea el puerto del host al puerto del contenedor MySQL.
volumes: Crea un volumen para persistir los datos de MySQL.


##2. .env
Este archivo contiene variables de entorno para la configuración de tu aplicación y base de datos. Aquí hay una explicación de cada variable:

DBHOST: Host de la base de datos (en este caso, localhost).
DBUSER: Usuario de la base de datos.
DBPASS: Contraseña de la base de datos.
DBNAME: Nombre de la base de datos.
DBPORT: Puerto de la base de datos.
PORT: Puerto en el que la aplicación se ejecutará.


##3. index.js
Este archivo es el punto de entrada de tu aplicación. Aquí está la explicación:

const express = require("express");: Importa el framework Express.
const app = express();: Crea una instancia de la aplicación Express.
app.use(require('./routes/app'));: Utiliza las rutas definidas en el archivo app.js en la carpeta routes.
app.listen(process.env.PORT || 3300, () => { ... });: Inicia el servidor en el puerto especificado en las variables de entorno o en el puerto 3300 por defecto.


##4. config.db.js
Este archivo configura la conexión a la base de datos MySQL. Aquí está la explicación:

const dotenv = require("dotenv");: Importa la biblioteca dotenv para cargar variables de entorno desde el archivo .env.
dotenv.config();: Carga las variables de entorno.
const mysql = require('mysql2');: Importa el paquete mysql2 para interactuar con MySQL.
let connection;: Declara una variable para la conexión a la base de datos.
try { ... } catch (error) { ... }: Intenta establecer una conexión a la base de datos y maneja cualquier error que pueda ocurrir.
module.exports = {connection};: Exporta la conexión para que pueda ser utilizada en otros archivos.


##5. routes/app.js
Este archivo define las rutas de tu API. Aquí hay una explicación de las funciones y rutas específicas:

getEstudiantes: Maneja la solicitud GET para obtener todos los estudiantes.
getProfesor: Maneja la solicitud GET para obtener todos los profesores.
postEstudiante: Maneja la solicitud POST para agregar un estudiante.
postProfesor: Maneja la solicitud POST para agregar un profesor.
delEstudiantes: Maneja la solicitud DELETE para eliminar un estudiante.
delProfesor: Maneja la solicitud DELETE para eliminar un profesor.
Estas funciones se vinculan a las rutas correspondientes (/estudiantes y /profesor) utilizando Express. Cada ruta tiene funciones asociadas para manejar diferentes tipos de solicitudes HTTP.
