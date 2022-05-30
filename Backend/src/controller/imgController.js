const Images = require('../models/Images');
const { Op } = require("sequelize");

const getImages = async (req, res) => {
    try {
        const {id} = req.params;
        const imgs = await Images.findAll({
            where: {
                [Op.or]: [
                    { id_user_add: null },
                    { id_user_add: id }
                ]
            }
        })
    } catch (error) {
        res.status(500).json({
            typeError: "Get images",
            message: "Ha ocurrido un error obteniedo las imagenes",
            data: {},
            error: error
        });
    }
}

const getImage = async (req, res) => {
    try {
        const {id} = req.params;
        const img = await Images.findByPk(id);
        res.json(img);
    } catch (error) {
        res.status(500).json({
            typeError: "Get image",
            message: "Ha ocurrido un error obteniedo la imagen",
            data: {},
            error: error
        });
    }
}

const deleteImg = async (req, res) => {
    try {
        const {id} = req.params;
        await Images.destroy({
            where: {
                id: id
            }
        });
        res.json({
            mgs: "Imagen eliminada" 
        })
    } catch (error) {
        res.status(500).json({
            typeError: "Delete image",
            message: "Ha ocurrido un error eliminando la imagen",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getImages,
    getImage,
    deleteImg
};