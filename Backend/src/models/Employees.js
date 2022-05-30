const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Employees = db.define('employees', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cargo: {
        type: DataTypes.STRING
    },
    sede: {
        type: DataTypes.INTEGER
    }
});