const express = require('express');
const app = express();
const router = express.Router();
// Rotas
const index = require('./routes/index.js');
app.use('/api', index);
module.exports = app;