const { response, request } = require('express');
const Usuario = require('../models/usuario.model');
const authModel = require('../models/auth.model');


const login = async (req = request, res = response) => {
    const {email , password} = req.body;
    const userInformationDB = await Usuario.findOne({email: email});
    const validPassword = await authModel.comparePassword(password, userInformationDB.password);

    if (validPassword) {
        const token = authModel.generarToken(
            {
                id: userInformationDB._id,
                nombre_completo: `${userInformationDB.nombre} ${userInformationDB.apellido}`,
                email: userInformationDB.email,
                edad: userInformationDB.edad,
            }
        );
        res.status(200).json({
            msg: 'Login correcto',
            data: token
        });
    } else {
        res.status(401).json({
            msg: 'Error en el login',
        });
    }

};

const validarToken = async (req = request, res = response) => {
    const {token} = req.body;
    res.status(200).json({
        msg: 'Respuesta JWT',
        data: authModel.validarToken(token)
    });
};


module.exports = {
    login,
    validarToken
};