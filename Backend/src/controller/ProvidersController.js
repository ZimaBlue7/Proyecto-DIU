require('dotenv').config();

const Providers = require('../models/Providers');

const getProveedores = async (req, res) => {
    try {

        const proveeores = await Providers.findAll();

        res.json({
            proveeores
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Get proveeders",
            message: "Ha ocurrido un problema obteniedo los provedores",
            data: {},
            error: error
        });
    }
}

const getProveedor = async (req, res) => {
    try {

        const id = req.params;

        const proveedor = await Providers.findByPk(id);

        res.json({
            proveedor
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get proveeder",
            message: "Ha ocurrido un problema obtenido el proveedor",
            data: {},
            error: error
        });
    }
}

const addProveedor = async (req, res) => {
    try {

        const {
            nombre,
            tipo_persona,
            telefono,
            correo,
            avatar
        } = req.body

        await Providers.create({
            nombre: nombre,
            type_person: tipo_persona,
            telefono: telefono,
            correo: correo,
            avatar: avatar
        })

        res.json({
            msg: "Proveedor agregado con exito"
        })

        
    } catch (error) {
        res.status(500).json({
            typeError: "Add proveeder",
            message: "Ha ocurrido un problema agregando al proveedor",
            data: {},
            error: error
        });
    }
}

const updateProveedor = async (req, res) => {
    try {

        const id = req.params;
        const {
            nombre,
            tipo_persona,
            telefono,
            correo,
            avatar
        } = req.body

        const proveedor = await Providers.findByPk(id);

        proveedor.update({
            nombre: nombre,
            type_person: tipo_persona,
            telefono: telefono,
            correo: correo,
            avatar: avatar
        })

        res.json({
            msg: "Proveedor actualizado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Update proveedor",
            message: "Ha ocurrido un problema actualizando el proveedor",
            data: {},
            error: error
        });
    }
}

const deleteProveedor = async (req, res) => {
    try {

        const id = req.params;

        await Providers.destroy(id);

        res.json({
            msg: "Proveedor eliminado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Delete proveedor",
            message: "Ha ocurrido un problema eliminando el proveedor",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getProveedores,
    getProveedor,
    addProveedor,
    updateProveedor,
    deleteProveedor
}