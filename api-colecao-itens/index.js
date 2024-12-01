const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use("/api", routes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Coleção de Itens!");
});
