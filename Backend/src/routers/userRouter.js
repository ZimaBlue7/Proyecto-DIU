const {
    Router
} = require('express');
const userRouter = Router();

const {
    getUsers,
    getUser,
    createUser
} = require('../controller/UserController');

userRouter.get('/allUsers', getUsers);
userRouter.get('/users/:id', getUser);

userRouter.post('/user', createUser);

module.exports = userRouter;