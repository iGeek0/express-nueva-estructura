const { Router } = require('express');
const router = Router();
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
} = require('../controllers/usuarios.controller');

router.get('/usuarios', usuariosGet);

router.post('/usuarios', usuariosPost);

router.put('/usuarios/:id', usuariosPut);

router.delete('/usuarios/:id', usuariosDelete);

module.exports = router;