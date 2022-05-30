const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Sedes = db.define('headquarters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    encargado: {
        type: DataTypes.INTEGER
    }
});