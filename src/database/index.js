//objetivo: estabelecer a conexao com o banco de dados para ser possivel mapear nossas estruturas que irao recuperar/incluir/alterar dados do banco

//preciso importar o sequelize

const Sequelize = require("sequelize");

let db = {}; //esse será o objeto que manterá a conexao com o BD

//parametros de conexao
const DATABASE_NAME = "movies";
const USERNAME = "root";
const PASSWORD = "Arthur2907";
const DIALECT = "mysql";
const HOSTNAME = "localhost";
const PORT = 3306;

const DB_SETUP = {
    dialect: DIALECT,
    host: HOSTNAME,
    port: PORT,
    define: {
        timestamps: false
    }
};

try{
    db = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, DB_SETUP);
    console.log("Conexão estabelecida com o banco de dados");
}
catch(error){
    console.log("---> NÃO FOI POSSÍVEL SE CONECTAR AO BANCO");
    console.error(error);
}

async function checkConnection() {
    try {
        await db.authenticate();
        console.log("Banco de Dados conectado com sucesso!");
    } 
    catch (error) {
        console.log("--> NÃO CONSIGO MANTER CONEXÃO COM O BANCO");
        console.error(error);
    }    
};

// quero que a função seja membro da const db, para isso adiciono funçao ao objeto dinamicamente
Object.assign(db,{
    checkConnection
});


module.exports = db;