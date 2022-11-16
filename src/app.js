const express = require('express');
const app = express();
const router = express.Router();
// Rotas
const index = require('./routes/index.js');
const personRoute = require('./routes/personRoute.js');
app.use('/', index);
app.use('/personRoute', personRoute);
module.exports = app;