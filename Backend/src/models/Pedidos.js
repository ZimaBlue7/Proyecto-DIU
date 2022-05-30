const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Pedidos = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_envio:{
        type: DataTypes.STRING
    },
    id_wish_list: {
        type: DataTypes.INTEGER
    },
    id_empleado: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    }
})