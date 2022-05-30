const Users = require('../models/Users');
const bcrypt = require('bcrypt');

const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            typeError: "Get Users",
            message: "Ha ocurrido un error obteniedo los usuarios",
            data: {},
            error: error
        });
    }
}

const getUser = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await Users.findByPk(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({
            typeError: "Get User",
            message: "Ha ocurrido un error obteniedo el usuario",
            data: {},
            error: error
        });
    }
}

const createUser = async(req, res) => {
    try {
        const {
            nombre,
            apellido,
            fecha_nacimiento,
            telefono,
            correo,
            password,
            rol
        } = req.body;

        const passwordEncript = await bcrypt.hash(password, 5);
        const user = await Users.create({
            nombre: nombre,
            apellido: apellido,
            fecha_nacimiento: fecha_nacimiento,
            telefono: telefono,
            correo: correo,
            password: passwordEncript,
            avatar: 1,
            rol: rol
        })

        res.json({
            mjs: "Usuario creado",
            usuario: user
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Create User",
            message: "Ha ocurrido un error creando el usuario",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser
};
