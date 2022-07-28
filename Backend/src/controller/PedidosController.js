require('dotenv').config();

const Pedidos = require('../models/Pedidos')

const getPedidos = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const getPedido = async (req, res) => {
    try {
        
        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const addPedido = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const updatePedido = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const deletePedido = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getPedidos,
    getPedido,
    addPedido,
    updatePedido,
    deletePedido
}