//aqui vamos determinar como que é formato do usuario dentro da base de dados
//começo importando o model de dentro do nosso sequelize
const { Model, DataTypes } = require('sequelize');

class Owner extends Model {
    //pra começar a configurar como esse model vai comportar, eu crio sempre um metodo chamado init 
    //que é um metodo estatico > é padrao do sequelize
    //INIT vai receber a conexão com a base de dados
    static init(sequelize) {
        super.init({
            //init ta chamando a classe Model e então é passado os campos da nossa tabela
            name: DataTypes.STRING,
            document: DataTypes.STRING,
        }, {
                //aqui é preciso passar outro objeto de configuração, que é a conexão com o banco de dados
                //que por padrão recebe o nome sequelize
                sequelize,
                tableName: 'owner'
            })
    }
    //criando novo metodo de associação
    static associate(models) {
        this.belongsTo(models.Pagador, {
            //primeiro eu passo a chabe estrangeira que vai fazer relacionamento entre
            //esses dois models
            foreignKey: 'pagador_id',
            as: 'cli',
        })
    }
};

module.exports = Owner;