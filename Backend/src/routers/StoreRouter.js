const {
    Router
} = require('express');
const storeRouter = Router();

const {
    getInformacionTienda,
    updateInfoTienda,
    addRedSocial,
    addTelefono,
    addCorreo,
    addFoto
} = require('../controller/TiendaControllers');

storeRouter.get('/store', getInformacionTienda);
storeRouter.put('/store/:id', updateInfoTienda);
storeRouter.post('/redsocial', addRedSocial);
storeRouter.post('/telefono', addTelefono);
storeRouter.post('/correo', addCorreo);
storeRouter.post('/fotosostore', addFoto)

const {
    getComments,
    getComment,
    getOpinions,
    getOpinion,
    addComment,
    addOpinion
} = require('../controller/ParticipacionController')

storeRouter.get('/comments', getComments);
storeRouter.get('/comment/:id', getComment);
storeRouter.get('/opinions', getOpinions);
storeRouter.get('/opinion/:id', getOpinion);
storeRouter.post('/comment', addComment);
storeRouter.post('/opinion', addOpinion);

module.exports = storeRouter;