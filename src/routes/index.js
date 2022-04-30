// arquivo que conterá as rotas definidas (todos os endpoints)

const express = require("express");
const produtoController = require("../controllers/produtoController")

const routes = express.Router();

routes.get("/produtos", produtoController.listarTudao);
routes.get("/produtos/:id", produtoController.listarDetalhes);
routes.post("/produtos", produtoController.cadastrar);
routes.put("/produtos", produtoController.alterar);
routes.delete("/produtos", produtoController.apagar);

module.exports = routes;