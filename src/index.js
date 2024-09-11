const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");


<<<<<<< HEAD
const projects = [
  {
    "name":"",
    "desc":"",
    "slogan":"",
    "repo":"",
    "demo":"",
    "autor":"",
    "job":"",
    "photo":""
  }
]
=======
>>>>>>> 92b07a311ae462abd062b4146f686015aa969686
// crear el servidor web
const server = express();

// necesito que mi servidor acepte peticiones externas
server.use(cors());

server.use(express.json());


async function getDBConnection() {
  const connection = await mysql.createConnection({
    // configuro la conexión
    host: "sql.freedb.tech",
    user: "freedb_admin_yessenia",
    password: "hTc5&j@@Py*Z*C6",
    database: "freedb_ProyectosMolones",
  });
  connection.connect(); // conecto
  return connection;
}
// establecer el puerto de conexión
const port = 5002;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});


server.get ('/projects', async (_req, res) => {

  const connection = await getDBConnection();
  const sqlQuery = "SELECT * FROM freedb_ProyectosMolones.proyectos LIMIT 4";
  const [projectsResult] = await connection.query(sqlQuery);
  connection.end();
  res.json({
    success: "true",
    result: projectsResult,
  })
});








// Ejemplo query:

// SELECT * FROM proyectos INNER JOIN autor ON proyectos.fk_autor_id=autor.id ORDER BY proyectos.id DESC LIMIT 4;






server.get('/project/:id', (req, res) => {

});

