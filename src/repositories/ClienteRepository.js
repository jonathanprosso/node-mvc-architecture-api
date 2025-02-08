const { Op } = require('sequelize');
const Cliente = require('../models/Cliente');

class ClienteRepository {
  async findAll() {
    return await Cliente.findAll();
  }

  async findById(id) {
    return await Cliente.findByPk(id);
  }

  async findByEmail(email) {
    return await Cliente.findOne({ where: { email } });
  }

  async create(data) {
    return await Cliente.create(data);
  }

  async update(id, newData) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;
    return await cliente.update(newData);
  }

  async delete(id) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;
    await cliente.destroy();
    return cliente;
  }

  async count() {
    return await Cliente.count();  
  }

  async buscarPorNome(nome) {
    
    return await Cliente.findAll({
      where: {
        nome: { [Op.like]: `%${nome}%` },
      },
    });
  }
}

module.exports = new ClienteRepository();
