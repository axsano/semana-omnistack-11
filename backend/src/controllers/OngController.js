const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({ id }); // Como o insert pode demorar para fazer o processo, é preciso aguardar o comando ser finalizado. É definida que é uma função asincrona com o comando await, ou seja quando o node chegar neste código ele vai aguardar o await finalizar para continuar
    
    }
};