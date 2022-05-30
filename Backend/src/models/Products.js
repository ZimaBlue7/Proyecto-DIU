const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_proveedor: {
        type: DataTypes.INTEGER
    },
    id_user_add: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.BLOB('long')
    }
});