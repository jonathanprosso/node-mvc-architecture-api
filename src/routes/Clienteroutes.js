const express = require('express');
const ClienteController = require('../controllers/ClienteController');

const router = express.Router();

router.get('/clientes/total', ClienteController.contar);
router.get('/clientes/nome', ClienteController.buscarPorNome);
router.get('/clientes', ClienteController.listar);
router.get('/clientes/:id', ClienteController.obter);
router.post('/clientes', ClienteController.criar);
router.patch('/clientes/:id', ClienteController.atualizar);
router.delete('/clientes/:id', ClienteController.excluir);


module.exports = router;