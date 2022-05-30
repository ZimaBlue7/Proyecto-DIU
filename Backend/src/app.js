const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

/*
const Employees = require('./models/Employees');
const Inventory = require('./models/Inventory');
const Schedule = require('./models/Schedule');
const Opinions = require('./models/Opinions');
const Pedidos = require('./models/Pedidos');
const Product = require('./models/Products');
const Task = require('./models/Task');
const Sedes = require('./models/Sedes');
const Tienda = require('./models/Tienda');
const Comments = require('./models/Comments');
const WishList = require('./models/WishList');
const Providers = require('./models/Providers');
const wishListProducts = require('./models/WishListProducts');
*/

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(require('./routers/userRouter'));
app.use(require('./routers/imgRouter'));

app.use(express.static('public'));

module.exports = app;