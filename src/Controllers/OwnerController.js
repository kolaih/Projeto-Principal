const Pagador = require('../model/Pagador');
const Owner = require('../model/Owner');


module.exports = {
    async index(req, res) {
        const { pagador_id } = req.params;
        // agora eu preciso ver se esse pagador existe, se existir eu quero listar todos eles
        const pagador = await Pagador.findByPk(pagador_id, {
            //incluir algum tipo de associação de relacionamento, dentro dos valores desse pagador aqui
            include: { association: 'clientes' }
        })
        return res.json(pagador);
    },

    async store(req, res) {
        const { pagador_id } = req.params;
        const { name, document } = req.body;

        const pagador = await Pagador.findByPk(pagador_id);
        if (!pagador) {
            return res.status(400).json({ error: 'Pagador Not Found!' })
        }
        const owner = await Owner.create({
            name,
            document,
            pagador_id,
        });
        return res.json(owner);
    }
};
