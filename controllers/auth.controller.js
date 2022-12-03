const { response, request } = require('express');
const Usuario = require('../models/usuario.model');
const authModel = require('../models/auth.model');


const login = async (req = request, res = response) => {
    const {correo , password} = req.body;
    const userInformationDB = await Usuario.findOne({email: correo});
    const validPassword = await authModel.comparePassword(password, userInformationDB.password);

    if (validPassword) {
        res.status(200).json({
            msg: 'Login correcto',
            data: "token"
        });
    } else {
        res.status(401).json({
            msg: 'Error en el login',
        });
    }

};


module.exports = {
    login
};