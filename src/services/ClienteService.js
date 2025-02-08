const ClienteRepository = require('../repositories/ClienteRepository');

class ClienteService {
  async listarClientes() {
    return await ClienteRepository.findAll();
  }

  async obterCliente(id) {
    return await ClienteRepository.findById(id);
  }

  async criarCliente(dados) {
    return await ClienteRepository.create(dados);
  }

  async atualizarCliente(id, novosDados) {
    return await ClienteRepository.update(id, novosDados);
  }

  async excluirCliente(id) {
    return await ClienteRepository.delete(id);
  }

  async contarClientes() {
    return await ClienteRepository.count();
  }

  async buscarPorNome(nome) {
    return await ClienteRepository.buscarPorNome(nome);
  }
  
}

module.exports = new ClienteService();
