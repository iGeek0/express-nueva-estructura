const { response, request } = require('express');
const Usuario = require('../models/usuario.model');
const authModel = require('../models/auth.model');

const usuariosGet = async (req = request, res = response) => {
    // GET - http://localhost:3000/usuarios
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({
            msg: 'GET API - controlador',
            detalle: usuarios
        })
    } catch (error) {
        res.status(400).json({
            msg: 'se detecto un error',
            detalle: error.message
        });
    }
};

const usuariosPost = async (req = request, res = response) => {
    // POST - http://localhost:3000/usuarios
    try {
        const body = req.body;
        let usuario = new Usuario(body);
        usuario.password = await authModel.hashPassword(usuario.password);
        await usuario.save()
        res.status(200).json({
            msg: 'POST API - controlador',
            post: body,
            usuario: usuario
        });
    } catch (error) {
        res.status(400).json({
            msg: 'se detecto un error',
            detalle: error.message
        });
    }
};

const usuariosPut = async (req = request, res = response) => {
    const { id } = req.params;
    const body = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, body);
    res.status(200).json({
        msg: 'Usuario actualizado',
    });
};

const usuariosDelete = async (req = request, res = response) => {
    // DELETE - http://localhost:3000/usuarios/10
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndDelete(id);
    res.status(200).json({
        msg: 'El usuario fue eliminado',
        id
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
};