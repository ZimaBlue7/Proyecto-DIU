const {
    Router
} = require('express');
const wishRouter = Router();

const {
    getWishList,
    addProduct,
    updateProduct,
    delteProduct
} = require('../controller/WishListController');

wishRouter.get('/wishlist', getWishList);
wishRouter.post('/wishlist', addProduct);
wishRouter.put('/wishlist/:id', updateProduct);
wishRouter.delete('/wishlist/:id', delteProduct);

module.exports = wishRouter;