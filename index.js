//requires
require("dotenv").config();
const express = require("express");

//Config do express
const app = express();
app.use(express.json());

//Config do banco de dados
const { connection, authenticate } = require("./database/database");
authenticate(connection);

//Definição de rotas
const rotasTurmas = require("./routes/turmas");

//Rotas
app.use(rotasTurmas);

app.listen(3000, () => {
  connection.sync({ force: true });
  console.log("http://localhost:3000");
});
