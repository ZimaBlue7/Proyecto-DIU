const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = WishListProducts = db.define('wish_list_products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_wish_list: {
        type: DataTypes.INTEGER
    },
    id_product: {
        type: DataTypes.INTEGER
    },
    cantidad: {
        type: DataTypes.INTEGER
    }
});

