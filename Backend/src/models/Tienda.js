const db = require('../db');
const { DataTypes } = require('sequelize');

module.exports = Tienda = db.define('store', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    about_us: {
        type: DataTypes.STRING
    },
    history: {
        type: DataTypes.STRING
    },
    mission: {
        type: DataTypes.STRING
    },
    vision: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    type_logo: {
        type: DataTypes.STRING
    },
    name_logo: {
        type: DataTypes.STRING
    },
    logo: {
        type: DataTypes.BLOB('long')
    }
});

module.exports = RedesSociales = db.define('social_networks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    red_social: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    }
});

module.exports = Telefonos = db.define('phones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.STRING
    }
});

module.exports = Correos = db.define('emails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    }
});