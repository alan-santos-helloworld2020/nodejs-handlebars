const express = require('express');
const router = express.Router();
const cnx = require('../controller/controller');



router.get('/', cnx.home);

router.get('/produtos', cnx.produtos);

router.get('/cadastro', cnx.cadastro);

router.get('/clientes', cnx.clientes);

router.get('/sobre', cnx.sobre);

module.exports = router;
