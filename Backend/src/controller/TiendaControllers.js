const Users = require('../models/Users');
const Tienda = require('../models/Tienda');
const RedesSociales = require('../models/Tienda');
const Telefonos = require('../models/Tienda');
const Correos = require('../models/Tienda');
const jwt = require('jsonwebtoken');

const getInformacionTienda = async (req, res) => {
    try {
        
        const tienda = await Tienda.findAll();
        const redesSociales = await RedesSociales.findAll();
        const telefonos = await Telefonos.findAll();
        const correos = await Correos.findAll();

        res.json({
            tienda,
            redesSociales,
            telefonos,
            correos
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Get info tienda",
            message: "Ha ocurrido un error obteniedo la informacion de la tienda",
            data: {},
            error: error
        });
    }
}

const updateInfoTienda = async (req, res) => {
    try {
        const {id} = req.params;
        const {
            about_us,
            history,
            mission,
            vision,
            location
        } = req.body;
        const authorization = req.get('authorization');
        let token = null;

        const user = await Users.findByPk(id);

        if( !user ){
            return res.json({ error: 'Usuario no encontrado' });
        }

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, user.password);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( decodedToken.rol === "employee" || decodedToken.rol === "admin" ){
            const tienda = await Tienda.findAll();
            tienda[0].update({
                about_us,
                history,
                mission,
                vision,
                location
            })

            res.json({
                message: "Actualizado"
            })

        }


    } catch (error) {
        res.status(500).json({
            typeError: "Update info tienda",
            message: "Ha ocurrido un error actualizando la informacion de la tienda",
            data: {},
            error: error
        });
    }
}

const addRedSocial = async (req, res) => {
    try {
        
        const {
            redSocial,
            link
        } = req.body;


    } catch (error) {
        res.status(500).json({
            typeError: "Update info tienda",
            message: "Ha ocurrido un error actualizando la informacion de la tienda",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getInformacionTienda,
    updateInfoTienda
}
