const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(require('./routers/userRouter'));
app.use(require('./routers/imgRouter'));

app.use(express.static('public'));

module.exports = app;