const Comments = require('../models/Comments');
const Users = require('../models/Users');
const Products = require('../models/Products');
const Opinions = require('../models/Opinions');
const jwt = require('jsonwebtoken');

const getComments = async (req, res) => {
    try {
        
        const AllComments = await Comments.findAll();

        let comments = [];

        AllComments.forEach( async comment => {
            const user = await Users.findByPk(comment.id_user);
            const product = await Products.findByPk(comment.id_product);
            comm = {
                id_product: comment.id_product,
                nombre_product: product.nombre,
                id: comment.id,
                text: comment.text,
                calificacion: comment.calificacion,
                id_user: comment.id_user,
                nombre_user: user.nombre + " " + user.apellido,
                correo: user.correo,
                rol: user.rol
            }
            comments.push(comm);
        } )

        return res.json(comments)

    } catch (error) {
        res.status(500).json({
            typeError: "Get Comments",
            message: "Ha ocurrido un error obteniedo los comentarios",
            data: {},
            error: error
        });
    }
}

const getComment = async (req, res) => {
    try {
        const {id} = req.params;

        const comment = await Comments.findByPk(id);

        const user = await Users.findByPk(comment.id_user);
        const product = await Products.findByPk(comment.id_product);
        let comm = {
            id_product: comment.id_product,
            nombre_product: product.nombre,
            id: comment.id,
            text: comment.text,
            calificacion: comment.calificacion,
            id_user: comment.id_user,
            nombre_user: user.nombre + " " + user.apellido,
            correo: user.correo,
            rol: user.rol
        }
        
        return res.json(comm)

    } catch (error) {
        res.status(500).json({
            typeError: "Get Comment",
            message: "Ha ocurrido un error obteniedo el comentario",
            data: {},
            error: error
        });
    }
}

const addComment = async (req, res) => {
    try {
        const {
            id_user,
            id_product,
            text,
            calificacion
        } = req.body;

        const user = await Users.findByPk(id_user);

        if( !user ){
            return res.json({ error: 'Usuario no encontrado' });
        }

        Comments.create({
            id_user,
            id_product,
            text,
            calificacion
        })

        return res.json({
            message: "Comentario agregado conexito"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Get Comment",
            message: "Ha ocurrido un error obteniedo el comentario",
            data: {},
            error: error
        });
    }
}

const getOpinions = async (req, res) => {
    try {

        const AllOpinions = await Opinions.findAll();

        let opinions = [];

        AllOpinions.forEach( async opinion => {
            const user = await Users.findByPk(opinion.id_user);
            opi = {
                id: opinion.id,
                texto: opinion.texto,
                id_user: opinion.id_user,
                nombre_user: user.nombre + " " + user.apellido,
                correo: user.correo,
                rol: user.rol
            }
            opinions.push(opi);
        })

        res.json(opinions);
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get opinions",
            message: "Ha ocurrido un error obteniedo las opiniones",
            data: {},
            error: error
        });
    }
} 

const getOpinion = async (req, res) => {
    try {

        const {id} = req.params;
        const opinions = await Opinions.findByPk(id);

        const user = await Users.findByPk(opinions.id_user);
        opi = {
            id: opinions.id,
            texto: opinions.texto,
            id_user: opinions.id_user,
            nombre_user: user.nombre + " " + user.apellido,
            correo: user.correo,
            rol: user.rol
        }

        res.json(opi);
        
    } catch (error) {
        res.status(500).json({
            typeError: "Get opinion",
            message: "Ha ocurrido un error obteniedo la opinion",
            data: {},
            error: error
        });
    }
}

const addOpinion = async (req, res) => {
    try {
        const {
            id_user,
            texto
        } = req.body;

        Opinions.create({
            id_user,
            texto
        })

        res.json({
            message: "Opino agregada con exito"
        })

    } catch (error) {
        res.status(500).json({
            typeError: "Get opinion",
            message: "Ha ocurrido un error obteniedo la opinion",
            data: {},
            error: error
        });
    }
}

module.exports = {
    getComments,
    getComment,
    getOpinions,
    getOpinion,
    addComment,
    addOpinion
}