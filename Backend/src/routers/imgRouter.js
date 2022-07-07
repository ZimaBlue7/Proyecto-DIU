const Images = require('../models/Images');
const { Router } = require('express');
const imgRouter = Router();


const multer = require('multer')
const path = require('path')
const fs = require('fs')

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-surcusalud-' + file.originalname)
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image');

const {
    getImages,
    getImage,
    deleteImg
} = require('../controller/imgController');

imgRouter.get('/imgs/:id', getImages)
imgRouter.get('/img/:id', getImage);

imgRouter.delete('/img', deleteImg);

imgRouter.put('/img/:id', fileUpload, async (req, res) => {

    try {

        const {id} = req.params;

        const img = await Images.findByPk(id);

        console.log(req.file)
        const type = req.file.mimetype
        const name = req.file.originalname
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))

        Images.update({
            id_user_add: img.id_user_add,
            type: type,
            name: name,
            data: data
        })

        try {
            fs.unlinkSync(path.join(__dirname, '../images/' + req.file.filename));
            console.log('File removed')
        } catch(err) {
            console.error('Something wrong happened removing the file', err)
        }

        res.send('image actualizada!');
    } catch (error) {
        res.status(500).json({
            typeError: "Create image",
            message: "Ha ocurrido un error creando la imagen",
            data: {},
            error: error
        });
    }
    
});

imgRouter.post('/img', fileUpload, (req, res) => {

    try {
        console.log(req.file)
        const type = req.file.mimetype
        const name = req.file.originalname
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))

        Images.create({
            id_user_add: null,
            type: type,
            name: name,
            data: data
        })

        try {
            fs.unlinkSync(path.join(__dirname, '../images/' + req.file.filename));
            console.log('File removed')
        } catch(err) {
            console.error('Something wrong happened removing the file', err)
        }

        res.send('image saved!');
    } catch (error) {
        res.status(500).json({
            typeError: "Create image",
            message: "Ha ocurrido un error creando la imagen",
            data: {},
            error: error
        });
    }
    
});

module.exports = imgRouter;