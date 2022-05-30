const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Images = db.define('images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user_add: {
        type: DataTypes.INTEGER
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
})