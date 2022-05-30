const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Comentarios = db.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
    },
    id_product: {
        type: DataTypes.INTEGER
    },
    text: {
        type: DataTypes.STRING
    },
    calificacion: {
        type: DataTypes.INTEGER
    }
});