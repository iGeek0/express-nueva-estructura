const { Router } = require('express');
const router = Router();
const chkToken = require('../middlewares/auth.middleware');
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
} = require('../controllers/usuarios.controller');

router.get('/usuarios', chkToken ,usuariosGet);

router.post('/usuarios', usuariosPost);

router.put('/usuarios/:id', chkToken , usuariosPut);

router.delete('/usuarios/:id', chkToken, usuariosDelete);

module.exports = router;