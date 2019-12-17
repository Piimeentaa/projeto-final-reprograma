const express = require('express');
const router = express.Router();
const controller = require("../Controllers/ListaingressosController")


router.get('', controller.getAll)
router.post('', controller.addCadastro)
router.post('/:cadastroId/filme', controller.addIngresso)
router.get('/meucadastro/:id', controller.getById)
// router.patch('/:idIngresso/:idFilmes', controller.updateIngresso)
// router.delete('/:id', controller.remove)


module.exports = router