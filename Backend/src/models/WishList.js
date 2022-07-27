const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = WishList = db.define('wish_list', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    }
});