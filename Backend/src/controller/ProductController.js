require('dotenv').config();

const Products = require('../models/Products');
const Images = require('../models/Gallery');
const jwt = require('jsonwebtoken');

const getProducts = async (req, res) => {
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

        const products = await Products.findAll();
        const images = await Images.findAll({
            where: {
                id_user_add: null
            }
        })

        const productAll = []

        if( decodedToken.rol === "employee" || decodedToken.rol === "admin" ){
            products.map( product => {
                productAll.push({
                    product: product,
                    images: images.filter(img => img.id_product === product.id)
                })
            } )
        }
        else{
            products.map( product => {
                productAll.push({
                    product: product,
                    images: images.filter(img => img.id_product === product.id && img.estado === "activa")
                })
            } )
        }

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

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        const product = await Products.findByPk(id);
        const images = await Image.findAll({
            where: {
                id_product: id
            }
        })

        if( decodedToken.rol === "employee" || decodedToken.rol === "admin" ){
            return res.json({
                product: product,
                images: images
            })
        }
        else{
            return res.json({
                product: product,
                images: images.filter(img => img.estado === "activa")
            })
        }

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
        } = req.params;

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
        }
        else{
            return res.json({
                message: "El usuario no tiene permiso"
            })
        }

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
        }
        else{
            return res.json({
                message: "El usuario no tiene permiso"
            })
        }

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
            await Products.destroy(id)

            return res.json({
                msg: "Producto eliminado"
            })
        }
        else{
            return res.json({
                message: "El usuario no tiene permiso"
            })
        }

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
