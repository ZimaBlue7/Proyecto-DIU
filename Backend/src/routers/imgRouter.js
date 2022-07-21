const { Router } = require('express');
const imgRouter = Router();

const {
    getImages,
    getImage,
    addImg,
    updateImg,
    deleteImg
} = require('../controller/imgController');

imgRouter.get('/imgs/:id', getImages)
imgRouter.get('/img/:id', getImage);

imgRouter.post('img/', addImg);

imgRouter.put('img/:id', updateImg);

imgRouter.delete('/img', deleteImg);

module.exports = imgRouter;