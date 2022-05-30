const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Inventories = db.define('inventories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_sede: {
        type: DataTypes.INTEGER
    },
    id_product: {
        type: DataTypes.INTEGER
    },
    cantidad_product: {
        type: DataTypes.INTEGER
    }
});