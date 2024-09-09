const express = require("express");
const cors = require("cors");

const projects = [
  {
    "name":"",
    "desc":"",
    "slogan":"",
    "repo":"",
    "demo":"",
    "autor":"",
    "job":""
  }
]
// crear el servidor web
const server = express();
// necesito que mi servidor acepte peticiones externas
server.use(cors());
// establecer el puerto de conexión
const port = 5001;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});

server.get ('/projects/list', (req, res) => {
  res.json(projects)
})