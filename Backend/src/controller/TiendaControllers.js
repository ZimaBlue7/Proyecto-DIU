require('dotenv').config();

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
        const {
            about_us,
            history,
            mission,
            vision,
            location
        } = req.body;
        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

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

        RedesSociales.create({
            red_social: redSocial,
            link: link
        })

        return res.json({
            message: "El enlace fue agregado con exito"
        }) 

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
