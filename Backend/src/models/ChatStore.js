const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = ChatStore = db.define("chatStore", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_receiver: {
        type: DataTypes.INTEGER
    },
})

module.exports = Msg = db.config("chat_mensajes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_chat: {
        type: DataTypes.INTEGER
    },
    user_send: {
        type: DataTypes.INTEGER
    },
    time: {
        type: DataTypes.TIME
    },
    message: {
        type: DataTypes.STRING
    }
})