require('dotenv').config();

const ChatStore = require('../models/ChatStore');
const Msg = require('../models/ChatStore');
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');

const getChat = async (req, res) => {
    try {

        const id = req.params;
        const chat = await ChatStore.findByPk(id);
        const message = await Msg.findAll({
            where: {
                id_chat: id
            }
        })

        const user = await Users.findByPk(chat.id_user);
       
        if( !user ){
            return res.json({ error: 'el usuario no existe' });
        }

        return res.json({
            chat: chat,
            mensajes: message
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Get Chat",
            message: "Ha ocurrido un error obteniendo el chat",
            data: {},
            error: error
        });
    }
}

const deleteMenssage = async (req, res) => {
    try {

        const id = req.params;

        const message = await Msg.findByPk(id);
 
        await Msg.destroy(id)

        res.json({
            msg: "Mensaje eliminado"
        })

        
    } catch (error) {
        res.status(500).json({
            typeError: "Delete message",
            message: "Ha ocurrido un error eliminado el mensaje",
            data: {},
            error: error
        });
    }
}

const addMenssage = async (req, res) => {
    try {

        const {
            chat,
            user_send,
            time,
            mensaje
        } = req.body;

        await Msg.create({
            id_chat: chat,
            user_send: user_send,
            time: time,
            message: mensaje
        })

        res.json({
            msg: "Mensaje guardado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Add message",
            message: "Ha ocurrido un error agregando el mensaje",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getChat,
    deleteMenssage,
    addMenssage
}
