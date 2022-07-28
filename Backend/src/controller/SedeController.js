require('dotenv').config();

const Task = require('../models/Task');
const Sedes = require('../models/Sedes');
const Inventories = require('../models/Inventory');
const Products = require('../models/Products')

const getTasks = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const tasks = await Task.findAll();

        if( token.rol === "admin" ){

            const sedes = await Sedes.findAll();

            let tasksList = []

            sedes.map(sede => {
                tasksList.push({
                    id_sede: sede.id,
                    ubicacion: sede.ubicacion,
                    encargado: sede.encargado,
                    tasks: tasks.filter(task => task.id_sede === sede.id)
                })
            })            

            res.json({
                tasksList
            })
        }
        else{

            const sedes = await Sedes.findByPk(token.sede);
            let datos = {
                id_sede: sedes.id,
                ubicacion: sedes.ubicacion,
                encargado: sedes.encargado,
                tasks: tasks.filter(task => task.id_sede === sedes.id || task.id_sede === null )
            }

            res.json({
                datos
            })

        }
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get tasks",
            message: "Ha ocurrido un error obteniedo las tareas",
            data: {},
            error: error
        });
    }
}

const getTask = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params

        const task = await Task.findByPk(id)

        res.json({
            task
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get task",
            message: "Ha ocurrido un error obteniedo la tarea",
            data: {},
            error: error
        });
    }
}

const addTask = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const {
            sede,
            titulo,
            descripcion,
            user_asignado,
            fecha_limite,
            estado
        } = req.body;

        await Task.create({
            id_sede: sede,
            titulo,
            descripcion,
            user_asignacion: user_asignado,
            fecha_limite,
            estado
        })

        res.json({
            msg: "Tarea agregada con exito"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Add task",
            message: "Ha ocurrido un error agregando la tarea",
            data: {},
            error: error
        });
    }
}

const updateTask = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params
        const {
            sede,
            titulo,
            descripcion,
            user_asignado,
            fecha_limite,
            estado
        } = req.body;

        const task = await Task.findByPk(id);

        task.update({
            id_sede: sede,
            titulo,
            descripcion,
            user_asignacion: user_asignado,
            fecha_limite,
            estado
        })

        res.json({
            msg: "Tarea actualizadad"
        })

        
    } catch (error) {
        res.status(500).json({
            typeError: "Update task",
            message: "Ha ocurrido un error actualizando la tarea",
            data: {},
            error: error
        });
    }
}

const deleteTask = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params

        await Task.destroy(id)

        res.json({
            msg: "Tarea eliminada"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Delete task",
            message: "Ha ocurrido un error eliminando la tarea",
            data: {},
            error: error
        });
    }
}

const getSedes = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const sedes = await Sedes.findAll();

        res.json({
            sedes
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get sedes",
            message: "Ha ocurrido un error obteniedo las sedes",
            data: {},
            error: error
        });
    }
}

const getSede = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params

        const sede = await Sedes.findByPk(id)

        res.json({
            sede
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "get sede",
            message: "Ha ocurrido un error obteniedo la sede",
            data: {},
            error: error
        });
    }
}

const addSede = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const {
            ubicacion,
            encargado
        } = req.body

        await Sedes.create({
            ubicacion,
            encargado
        })

        res.json({
            msg: "Sede agregada"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Add sede",
            message: "Ha ocurrido un error agregando la sede",
            data: {},
            error: error
        });
    }
}

const updateSede = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params
        const {
            ubicacion,
            encargado
        } = req.body

        const sede = await Sedes.findByPk(id)
        
        sede.update({
            ubicacion,
            encargado
        })

        res.json({
            msg: "sede actualizada"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Update sede",
            message: "Ha ocurrido un error actualizando la sede",
            data: {},
            error: error
        });
    }
}

const deleteSede = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params

        await Sedes.destroy(id)

        res.json({
            msg: "Sede eliminada"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Delete sede",
            message: "Ha ocurrido un error eliminando la sede",
            data: {},
            error: error
        });
    }
}

const getInventarios = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const inventarios = await Inventories.findAll();
        const products = await Products.findAll();
        const sedes = await Sedes.findAll();

        const inventario_list = [];

        sedes.map( sede => {
            let dato = {
                sede: sede,
                inventario: []
            }

            inventarios.map(inventario => {
                dato.inventario.push({
                    cantidad: cantidad_product,
                    products: products.filter( product => product.id === inventario.id_product )
                })
            })

            inventario_list.push(dato)

        } )

        res.json({
            inventario_list
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get Inventory",
            message: "Ha ocurrido un problema obteniedo los inventarios",
            data: {},
            error: error
        });
    }
}

const getInventario = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params

        const inventario = await Inventories.findByPk(id);
        const sede = await Sedes.findAll({
            where: {
                id: inventario.id_sede
            }
        })
        const product = await Products.findAll({
            where: {
                id: inventario.id_product
            }
        })

        res.json({
            sede: sede,
            inventario: inventario,
            producto: product
        })

        
    } catch (error) {
        res.status(500).json({
            typeError: "Get inventario",
            message: "Ha ocurrido un problema obteniedo el inventario",
            data: {},
            error: error
        });
    }
}

const getInventarioSede = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params

        const sede = await Sedes.findByPk(id)
        const inventarios = await Inventories.findAll({
            where:{
                id_sede: id
            }
        })
        const products = await Products.findAll()

        let datos = {
            sede: sede,
            inventario: []
        }

        inventarios.map( inventario => {
            datos.inventario.push({
                cantidad: inventario.cantidad_product,
                producto: products.filter(product => product.id === inventario.id_product)
            })
        } )

        
    } catch (error) {
        res.status(500).json({
            typeError: "Get inventario sede",
            message: "Ha ocurrido un problema obteniedo el inventario de la sede",
            data: {},
            error: error
        });
    }
}

const addInventario = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const {
            sede,
            product,
            cantidad
        } = req.body

        await Inventories.create({
            id_sede: sede,
            id_product: product,
            cantidad_product: cantidad
        })

        res.json({
            msg: "Inventario agregado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Add inventario",
            message: "Ha ocurrido un problema agregando el inventario",
            data: {},
            error: error
        });
    }
}

const updateInventario = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params
        const {
            cantidad
        } = req.body

        const inventario = await Inventories.findByPk(id)
        inventario.update({
            cantidad_product: cantidad
        })

        res.json({
            msg: "Inventario actualizado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Update inventario",
            message: "Ha ocurrido un problema actualizando el inventario",
            data: {},
            error: error
        });
    }
}

const deleteInventario = async (req, res) => {
    try {

        const authorization = req.get('authorization');
        let token = null;

        if( authorization && authorization.toLowerCase().startsWith('bearer') ){
            token = authorization.substring(7);
        }

        const decodedToken = jwt.verify(token, process.env.clave);

        if( !token || !decodedToken.rol ){
            return res.json({ error: 'token missing or invalid' });
        }

        if( token.rol !== "employee" || token.rol !== "admin" ){
            return res.json({ error: 'El usuario no tiene acceso a la informacion' });
        }

        const id = req.params

        await Inventories.destroy(id)

        res.json({
            msg: "Inventario eliminado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "Delete inventario",
            message: "Ha ocurrido un problema eliminando el inventario",
            data: {},
            error: error
        });
    }
}

module.exports = {
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
}