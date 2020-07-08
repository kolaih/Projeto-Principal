/*aqui são as configurações da minha database*/

/*  esse config aqui, vai exportar um objeto de configurações da minha base, e aqui
eu preciso passar algumas coisas
*/

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'leticia',
    password: 'postgres',
    database: 'cadastroCheque',
    define: {
        timestamps: true,
        underscored: true,
    },

};

// terminei aqui a configuração eu vou pro database >  index.js
