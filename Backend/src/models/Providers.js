const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Providers = db.define('providers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    type_person: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.INTEGER
    }
});