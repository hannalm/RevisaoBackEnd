// unica responsabilidade: iniciar api

const express = require("express");
const routes = require("./routes")
const db = require("./database");
const cors = require("cors");

const api = express();

db.checkConnection();

api.use(cors());
api.use(express.json()); //habilitando a manipulaçao de json
api.use(routes);



//esperar as requisições
api.listen(3000, () => {
    console.log("API rodando lindamente na porta 3000");
    console.log("Acesse via http://localhost:3000");    
});
