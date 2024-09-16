const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();
// crear el servidor web
const server = express();

// necesito que mi servidor acepte peticiones externas
server.use(cors());

server.use(express.json());
server.set("view engine", "ejs");

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
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("Server is running on port " + port);
});

server.get("/projects", async (req, res) => {
  //try para errores
  try {
    const connection = await getDBConnection();
    const sqlQuery =
      "SELECT * FROM freedb_ProyectosMolones.autor AS autor, freedb_ProyectosMolones.proyectos AS projects WHERE autor.id = projects.fk_autor_id LIMIT 4 OFFSET 1";
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

// endpoint para añadir un nuevo proyecto
server.post("/projects", async (req, res) => {
  try {
    const connection = await getDBConnection();
    const params = req.body;
    const autorQuerySQL =
      "INSERT INTO autor (name, job, photo) VALUES(?, ?, ?)";
    const [autorResult] = await connection.query(autorQuerySQL, [
      params.name,
      params.job,
      params.photo,
    ]);

    const newAutor = autorResult.insertId;
    const projectQuerySQL =
      "INSERT INTO proyectos (proyectName, description, slogan, tecnologies, image, github, demo, fk_autor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const [projectResult] = await connection.query(projectQuerySQL, [
      params.proyectName,
      params.description,
      params.slogan,
      params.tecnologies,
      params.image,
      params.github,
      params.demo,
      newAutor,
    ]);

    connection.end();
    res.json({
      status: "success",
      result: projectResult,
      cardUrl: `${process.env.SERVER_DOMAIN}/detail/${projectResult.insertId}`,
    });
  } catch (e) {
    res.status(500);
    res.json({
      success: false,
      error: e,
    });
  }
});

//para renderizar la tarjeta con motores de plantillas.
server.get("/detail/:id", async (req, res) => {
  const connection = await getDBConnection();
  const id = req.params.id;
  const sqlQuery =
    "SELECT * FROM proyectos, autor where proyectos.id = ? and proyectos.fk_autor_id = autor.id;";
  const [result] = await connection.query(sqlQuery, [id]);
  connection.end();
  console.log(result);
  res.render("detail", { result: result[0] });
});

//agregar el servidor estatico

const staticServer = "./src/public-react";
server.use(express.static(staticServer));

const styleServer = "./src/public-css";
server.use(express.static(styleServer));
