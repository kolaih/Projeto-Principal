/* aqui é onde farei minha conexão com o banco de dados
como eu vou fazer essa conexão?
primeiro eu preciso ter um lugar pra eu armazenar as minhas credenciais de acesso da
 minha base de dados*/

//  depois de configurar a database, venho pra ca e faço duas coisas
// primeira: importo sequelize
// segundo: importo meu config

const Sequelize = require('sequelize') //com S maiusculo pq ele é uma classe
const dbConfig = require("../config/database")
const Pagador = require('../model/Pagador') //e logo depois de fazer a conexão com o banco de dados >>>>
const Owner = require('../model/Owner')


// agora eu faço a conecão com o banco de dados

const connection = new Sequelize(dbConfig);
Pagador.init(connection);
Owner.init(connection);

Pagador.associate(connection.models);
Owner.associate(connection.models);


//model > toda vez que da init ele cadastra o nosso model dentro da conexao
// entao eu passo o models como parametro pq ele vai conter o pagador e o owner


// agora eu vou exportar essa conexão daqui caso precisemos utilizar em outro arquivo
module.exports = connection;