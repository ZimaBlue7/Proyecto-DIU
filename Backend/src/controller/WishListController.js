require('dotenv').config();

const WishList = require('../models/WishList');
const WishListProduct = require('../models/WishListProducts');
const Products = require('../models/Products');

const getWishList = async (req, res) => {
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

        let wishList = []

        const wish_list = await WishList.findAll({
            where: {
                id_user: token.id,
                estado: "activo"
            }
        })

        if( wish_list && wish_list.length > 0 ){
            wish_list.map(wish => {

                let wishL = {
                    wish_data: wish,
                    list: []
                }

                const products_wish = await WishListProduct.findAll({
                    where: {
                        id_wish_list: wish.id
                    }
                }) 

                if( products_wish && products_wish.length > 0 ){

                    products_wish.map( prodWish => {
                        
                        const product = await Products.findByPk(prodWish.id_product)

                        const data = {
                            id: prodWish.id,
                            cantidad: prodWish.cantidad,
                            product: product
                        }

                        wishL.list.push(data)

                    } )
                    
                }

                wishList.push(wishL)

            })
        }
        
        res.json({
            wishList
        })        

    } catch (error) {
        res.status(500).json({
            typeError: "Get wish list",
            message: "Ha ocurrido un error obteniedo la lista de deseos",
            data: {},
            error: error
        });
    }
}

const addProduct = async (req, res) => {
    try {
        
        const {
            wish_list,
            product,
            cantidad
        } = req.body

        await WishListProduct.create({
            id_wish_list: wish_list,
            id_product: product,
            cantidad: cantidad
        })

        res.json({
            msg: "Producto agregado"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Add product wish list",
            message: "Ha ocurrido un error agregando el producto",
            data: {},
            error: error
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        
        const id = req.params
        const {
            cantidad
        } = req.body

        const product = await WishListProduct.findByPk(id)

        product.update({
            cantidad: cantidad
        })

        res.json({
            msg: "Producto actualizado"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Update product wish list",
            message: "Ha ocurrido un error actualizando el producto",
            data: {},
            error: error
        });
    }
}

const delteProduct = async (req, res) => {
    try {

        const id = req.params

        await WishListProduct.destroy(id)

        res.json({
            msg: "Producto eliminado"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Delete product wish list",
            message: "Ha ocurrido un error eliminando el producto",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getWishList,
    addProduct,
    updateProduct,
    delteProduct
}