const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Task = db.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_sede:{
        type: DataTypes.INTEGER
    },
    titulo: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    user_asignacion: {
        type: DataTypes.INTEGER
    },
    fecha_limite: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.STRING
    }
});