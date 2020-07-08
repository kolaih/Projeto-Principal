const Pagador = require('../model/Pagador')
//o controller que lida com as requisições e devolve respostas la pro nosso front end, pra nossa aplicação

//aqui o nosso controler vai lidar com o Pagador.js, entao importa ele
module.exports = {
    async index(req, res) {
        //esse metodo vai buscar por todos os usuarios
        const pagador = await Pagador.findAll();

        return res.json(pagador);
    },
    //cria-se o 'store' que serve pra armazenar a informação de cadastro de pagador
    async store(req, res) {
        //quando criar o cadastro do pagador, a gente vai enviar atraves do corpo da requisicao (req.body), os campos da nossa tabela criada
        const { name, phone } = req.body;

        const pagador = await Pagador.create({ name, phone });
        //aqui quero retornar em formato de json os dados desse pagador
        return res.json(pagador);
    }
}