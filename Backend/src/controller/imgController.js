const Images = require('../models/Gallery');
const { Op } = require("sequelize");

const getImages = async (req, res) => {
    try {
        const {id} = req.params;
        const imgs = await Images.findAll({
            where: {
                [Op.or]: [
                    {   
                        [Op.and]: [
                            {
                                id_user_add: null  
                            },
                            {
                                id_product: null
                            }
                        ]
                    },
                    { 
                        id_user_add: id 
                    }
                ]
            }
        })

        res.json(imgs);

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

const getImageProduct = async (req, res) => {
    try {
        const id = req.params;

        const images = await Images.findAll({
            where:{
                id_product: id
            }
        })

        res.json({
            images
        })

    } catch (error) {
        
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

const addImg = async (req, res) => {
    try {
        const {
            user,
            estado,
            img
        } = req.body;

        await Images.create({
            id_user_add: user,
            estado: estado,
            url: img
        });

        res.json({
            msg: "Imagen agregada con exito"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Add image",
            message: "Ha ocurrido un error agregado la imagen",
            data: {},
            error: error
        });
    }
}

const updateImg = async (req, res) => {
    try {
        const id = req.params;
        const {
            estado,
            img
        } = req.body;

        const image = await Images.findByPk(id);

        image.update({
            estado: estado,
            url: img
        })

        res.json({
            msg: "Imagen actualizada"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Update image",
            message: "Ha ocurrido un error actualizando la imagen",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getImages,
    getImage,
    addImg,
    updateImg,
    deleteImg
};