const bcrypt = require('bcrypt');
// utilizar camelCase para los nombres de las variables o funciones(recomendacion)
// Estamos utilizando BCRYPT NO LO OLVIDES!!!
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hash) => {
    // password = constraseña que el usuario ingresa en texto plano
    // hash = contraseña encriptada
    return await bcrypt.compare(password, hash);
    // return true or false
}


module.exports = {
    hashPassword,
    comparePassword
};