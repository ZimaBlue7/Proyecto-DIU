const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Schedule = db.define('schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    hora_inicio: {
        type: DataTypes.TIME
    },
    hora_fin: {
        type: DataTypes.TIME
    }
})

