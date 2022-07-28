const {
    Router
} = require('express');
const dashboradRouter = Router();

const {
    getPedidos,
    getPedido,
    addPedido,
    updatePedido,
    deletePedido
} = require('../controller/PedidosController')

dashboradRouter.get('/pedidos', getPedidos);
dashboradRouter.get('/pedido/:id', getPedido);
dashboradRouter.post('/pedido', addPedido);
dashboradRouter.put('/pedido/:id', updatePedido);
dashboradRouter.delete('/pedido/:id', deletePedido)

const {
    getProveedores,
    getProveedor,
    addProveedor,
    updateProveedor,
    deleteProveedor
} = require('../controller/ProvidersController')

dashboradRouter.get('/proveedores', getProveedores);
dashboradRouter.get('/proveedor/:id', getProveedor);
dashboradRouter.post('/proveedor', addProveedor);
dashboradRouter.put('/proveedor/:id', updateProveedor);
dashboradRouter.delete('/proveedor/:id', deleteProveedor)

const {
    getTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask,
    getSedes,
    getSede,
    addSede,
    updateSede,
    deleteSede,
    getInventarios,
    getInventario,
    getInventarioSede,
    addInventario,
    updateInventario,
    deleteInventario
} = require('../controller/SedeController')

dashboradRouter.get('/tasks', getTasks);
dashboradRouter.get('/task/:id', getTask);
dashboradRouter.post('/task', addTask);
dashboradRouter.put('/task/:id', updateTask);
dashboradRouter.delete('/task/:id', deleteTask);
dashboradRouter.get('/sedes', getSedes);
dashboradRouter.get('/sede/:id', getSede);
dashboradRouter.post('/sede', addSede);
dashboradRouter.put('/sede/:id', updateSede);
dashboradRouter.delete('/sede/:id', deleteSede);
dashboradRouter.get('/inventarios', getInventarios);
dashboradRouter.get('/inventario/:id', getInventario);
dashboradRouter.get('/inventariosede/:id', getInventarioSede);
dashboradRouter.post('inventario', addInventario);
dashboradRouter.put('/inventario/:id', updateInventario);
dashboradRouter.delete('/inventario/:id', deleteInventario)

module.exports = dashboradRouter;