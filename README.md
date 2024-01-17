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
