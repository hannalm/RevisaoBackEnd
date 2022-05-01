//cada controller possui a lógica para tratar as requisições
const Filmes = require("../model/Filmes");

const filmesController = {
    async listarTudao(req, res){
        try{
            const lista = await Filmes.findAll();
            res.status(200);
            res.json(lista);
        }
        catch(error){
            res.status(500);
            res.send("Erro ao recuperar dados dos filmes");
        }
        //logica normal: select * na tabela movie e retornar json       
    },
    async buscarPeloId(req, res){
        //logica normal: select * com where do id
        const idFilme = req.params['id'];
        console.log("buscar pelo id "+req.params["id"]);
        try{
            const filme = await Filmes.findByPk(idFilme);
            if (filme){ // filme é diferente de undefined
                res.status(200);
                res.json(filme);
            }
            else{
                res.status(404);
                res.send("Filme de identificação "+idFilme+" não encontrado")
            }
        }
        catch(error){
            res.status=(500);
            res.send("Erro ao recuperar dados do banco")
        }
    },

}

module.exports = filmesController;