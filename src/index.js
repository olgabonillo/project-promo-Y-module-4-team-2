const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// crear el servidor web
const server = express();

// necesito que mi servidor acepte peticiones externas
server.use(cors());

server.use(express.json());
server.set('view engine', 'ejs');


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

server.get('/projects', async (req, res) => {
  //try para errores 
  try {
    const connection = await getDBConnection();
    const sqlQuery = "SELECT * FROM freedb_ProyectosMolones.autor AS autor, freedb_ProyectosMolones.proyectos AS projects WHERE autor.id = projects.fk_autor_id LIMIT 4;";
    const [projectsResult] = await connection.query(sqlQuery);
    await connection.end();

    res.json({
      success: true,
      result: projectsResult,
    });
  } catch (e) {
    res.status(500);
    res.json({
      success: false,
      result: [],
      error: e,
    });
  }
});

// endpoint para recibir los datos del formulario
server.post("/projects", async(req, res) => {

  const connection = await getDBConnection();
  const params = req.body;
  
 console.log(params);

const query = "INSERT INTO autor (name, job, photo) VALUES(?, ?, ?)";
const [projects] = await connection.query(query, [
  params.name,
  params.job,
  params.photo
] );
  await connection.end();
  res.json({
    status: "success",
    result : projects,
    cardurl://url de la pagina del motor de plantilla,
  });
});


//agregar el servidor estatico 

// Ejemplo query:

// SELECT * FROM proyectos INNER JOIN autor ON proyectos.fk_autor_id=autor.id ORDER BY proyectos.id DESC LIMIT 4;
