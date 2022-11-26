const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    // GET - http://localhost:3000/usuarios
    res.status(200).json({
        msg: 'GET API - controlador'
    })
};
const usuariosPost = (req = request, res = response) => {
    // POST - http://localhost:3000/usuarios
    res.status(200).json({
        msg: 'POST API - controlador'
    });
};
const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    const body = req.body;
    console.log(req.body);
    res.status(200).json({
        msg: 'PUT API - controlador',
        id: id,
        body: body
    });
};
const usuariosDelete = (req = request, res = response) => {
    // DELETE - http://localhost:3000/usuarios/10
    const { id } = req.params;
    res.status(200).json({
        msg: 'DELETE API - controlador',
        id
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
};