require('dotenv').config();

const Products = require('../models/Products');
const Images = require('../models/Gallery');
const jwt = require('jsonwebtoken');

const getProducts = async (req, res) => {
    try {

        const products = await Products.findAll();
        const images = await Images.findAll({
            where: {
                id_user_add: null
            }
        })

        const productAll = []

        products.map( product => {
            productAll.push({
                product: product,
                images: images.filter(img => img.id_product === product.id)
            })
        } )

        res.json({
            productAll
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get Products",
            message: "Ha ocurrido un error obteniedo los productos",
            data: {},
            error: error
        });
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params;

        const product = await Products.findByPk(id);
        const images = await Image.findAll({
            where: {
                id_product: id
            }
        })

        return res.json({
            product: product,
            images: images
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Get Product",
            message: "Ha ocurrido un error obteniedo el producto",
            data: {},
            error: error
        });
    }
}

const addProduct = async (req, res) => {
    try {
        const {
            proveedor,
            employee,
            nombre,
            precio,
            estado,
            descripcion,
            categoria, 
            image
        } = req.body;

        await Products.create({
            id_proveedor: proveedor,
            id_user_add: employee,
            nombre,
            precio,
            estado,
            descripcion,
            categoria, 
            image
        })
    
        return res.json({
            msg: "Producto agregado con exito"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Add Product",
            message: "Ha ocurrido un error agregando el producto",
            data: {},
            error: error
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params;
        const {
            employee,
            nombre,
            precio,
            estado,
            descripcion,
            categoria,
            image
        } = req.body;

        const product = await Products.findByPk(id);

        product.update({
            id_user_add: employee,
            nombre,
            precio,
            estado,
            descripcion,
            categoria, 
            image
        })

        return res.json({
            msg: "Producto actualizado"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Update Product",
            message: "Ha ocurrido un error actualizando el producto",
            data: {},
            error: error
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params

        await Products.destroy(id)

        return res.json({
            msg: "Producto eliminado"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Delete Product",
            message: "Ha ocurrido un error eliminando el producto",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}
