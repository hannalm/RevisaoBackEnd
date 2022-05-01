// arquivo que conterá as rotas definidas (todos os endpoints)

const express = require("express");
const produtoController = require("../controllers/produtoController")
const filmesController = require("../controllers/filmesController")
const routes = express.Router();

routes.get("/produtos", produtoController.listarTudao);
routes.get("/produtos/:id", produtoController.listarDetalhes);
routes.post("/produtos", produtoController.cadastrar);
routes.put("/produtos", produtoController.alterar);
routes.delete("/produtos", produtoController.apagar);

//rotas para recuperar filmes
//rota1 - recuperar filme pelo id
//rota2 - recuperar todos o filmes
routes.get('/movies/:id', filmesController.buscarPeloId);
routes.get('/movies', filmesController.listarTudao);


module.exports = routes;