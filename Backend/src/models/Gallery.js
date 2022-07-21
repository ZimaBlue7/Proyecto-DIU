const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Images = db.define('gallery', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_product:{
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    id_user_add: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
})