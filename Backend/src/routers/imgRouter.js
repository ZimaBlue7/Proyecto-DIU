const Images = require('../models/Images');
const { Router } = require('express');
const imgRouter = Router();

const {
    getImages,
    getImage,
    deleteImg
} = require('../controller/imgController');

imgRouter.get('/imgs/:id', getImages)
imgRouter.get('/img/:id', getImage);

imgRouter.delete('/img', deleteImg);

module.exports = imgRouter;