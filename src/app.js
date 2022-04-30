// unica responsabilidade: iniciar api

const express = require("express");
const routes = require("./routes")
const api = express();

api.use(routes);



//esperar as requisições
api.listen(3000, () => {
    console.log("API rodando lindamente na porta 3000");
    console.log("Acesse via http://localhost:3000");    
});
