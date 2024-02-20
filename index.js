const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());
app.use(todoRoutes);

module.exports = app;