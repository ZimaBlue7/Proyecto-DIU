const {
    Router
} = require('express');
const userRouter = Router();

const {
    getUsers,
    getUser,
    getEmployees,
    verificarUser,
    createUser,
    addEmpleado,
    updateUser,
    updateEmployees,
    deleteUser
} = require('../controller/UserController');

userRouter.get('/users', getUsers);
userRouter.get('/user/:id', getUser);
userRouter.get('/employees', getEmployees);

userRouter.post('/employee', addEmpleado);
userRouter.post('/user', createUser);
userRouter.post('/autenticarUser', verificarUser);

userRouter.put('/user/:id', updateUser);
userRouter.put('/employee/:id', updateEmployees);

userRouter.delete('/user/:id', deleteUser);

module.exports = userRouter;