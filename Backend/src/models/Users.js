const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    telefono: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.INTEGER
    },
    rol: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
})