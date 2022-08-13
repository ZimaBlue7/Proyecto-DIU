require('dotenv').config();

const Pedidos = require('../models/Pedidos');
const WishList = require('../models/WishList');

const getPedidos = async (req, res) => {
    try {

        const pedidos = await Pedidos.findAll();

        res.json(pedidos);
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const getPedido = async (req, res) => {
    try {
        
        const id = req.params;

        const wistList = await WishList.findAll({
            where:{
                id_user: id
            }
        });


        let listW = [];
        wistList.map( async wishL => {
            let list = {
                wishList: wishL,
                pedido: []
            }

            const pedido = await Pedidos.findAll({
                where: {
                    id_wish_list: wishL.id
                }
            })

            pedido.map( ped => {
                list.pedido.push(ped)
            } )

            listW.push(list);

        } )

        res.json({listW})

    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const addPedido = async (req, res) => {
    try {

        const {
            tipoEnvio,
            wistList
        } = req.body;

        const wistlist = await WishList.findByPk(wistList);

        wistlist.update({
            estado: 'Pedido'
        })

        await Pedidos.create({
            tipo_envio: tipoEnvio,
            id_wish_list: wistList,
            estado: "Activo"
        })

        res.json({
            msg: "Pedido agregado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const updatePedido = async (req, res) => {
    try {
        
        const id = req.params;
        const {
            estado
        } = req.body;

        const pedidos = await Pedidos.findByPk(id);

        pedidos.update({
            estado: estado
        })

        res.json({
            msg: "Pedido actualizado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const AsignarEmpleadoPedido = async (req, res) => {
    try {
        
        const id = req.params;
        const {
            empleado
        } = req.body;

        const pedidos = await Pedidos.findByPk(id);

        pedidos.update({
            id_empleado: empleado
        })

        res.json({
            msg: "Pedido actualizado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

const deletePedido = async (req, res) => {
    try {

        const id = req.params;

        await Pedidos.destroy(id);

        res.json({
            msg: "Pedido eliminado"
        })
        
    } catch (error) {
        res.status(500).json({
            typeError: "",
            message: "",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getPedidos,
    getPedido,
    addPedido,
    AsignarEmpleadoPedido,
    updatePedido,
    deletePedido
}