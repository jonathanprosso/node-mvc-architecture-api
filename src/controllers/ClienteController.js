const ClienteService = require('../services/ClienteService');

class ClienteController {
  async listar(req, res) {
    const clientes = await ClienteService.listarClientes();
    return res.json(clientes);
  }

  async obter(req, res) {
    const cliente = await ClienteService.obterCliente(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
    return res.json(cliente);
  }

  async criar(req, res) {
    try {
      const cliente = await ClienteService.criarCliente(req.body);
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async atualizar(req, res) {
    const cliente = await ClienteService.atualizarCliente(req.params.id, req.body);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
    return res.json(cliente);
  }

  async excluir(req, res) {
    const cliente = await ClienteService.excluirCliente(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
    return res.json({ message: 'Cliente excluído com sucesso' });
  }

  async contar(req, res) {
    try {
        const total = await ClienteService.contarClientes();
        return res.json({ total });
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao contar clientes' });
    }
}

  async buscarPorNome(req, res) {
    const { nome } = req.query;
    if (!nome) return res.status(400).json({ error: "O parâmetro 'nome' é obrigatório" });

    const clientes = await ClienteService.buscarPorNome(nome);
    return res.json(clientes);
  }
}

module.exports = new ClienteController();

