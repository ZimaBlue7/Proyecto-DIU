const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Opiniones = db.define('opinions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    texto: {
        type: DataTypes.STRING
    }
});