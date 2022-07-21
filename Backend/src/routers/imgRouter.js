const { Router } = require('express');
const imgRouter = Router();

const {
    getImages,
    getImage,
    getImageProduct,
    addImg,
    addImgProduct,
    updateImg,
    deleteImg
} = require('../controller/imgController');

imgRouter.get('/imgs/:id', getImages)
imgRouter.get('/img/:id', getImage);
imgRouter.get('/img/products/:id', getImageProduct)

imgRouter.post('img/', addImg);
imgRouter.post('/img/product', addImgProduct)

imgRouter.put('img/:id', updateImg);

imgRouter.delete('/img', deleteImg);

module.exports = imgRouter;