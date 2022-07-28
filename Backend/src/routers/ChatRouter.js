const {
    Router
} = require('express');
const chatRouter = Router();

const {
    getChat,
    deleteMenssage,
    addMenssage
} = require('../controller/ChatStoreController');

chatRouter.get('/chat/:id', getChat);
chatRouter.delete('/chat/:id', deleteMenssage);
chatRouter.post('/chat', addMenssage);

module.exports = chatRouter;