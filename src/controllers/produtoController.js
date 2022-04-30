//cada controller possui a lógica para tratar as requisições

const produtoController = {
    cadastrar(req, res){
        console.log("Estou na função cadastrar");
        res.send("PRODUTOController-cadastrar");
    },
    listarTudao(req, res){
        console.log("Estou na função listar tudão");
        res.send("PRODUTOController-listartudao");
    },
    alterar(req, res){
        console.log("Estou na função alterar");
        res.send("PRODUTOController-alterar");
    },
    apagar(req, res){
        console.log("Estou na função apagar");
        res.send("PRODUTOController-apagar");
    },
    listarDetalhes(req, res){
        let idProduto = req.params['id'];
        console.log("Estou nos detalhes do produto " +idProduto);
        res.send("PRODUTOController-listardetalhes-"+idProduto);
    },

}

module.exports = produtoController;