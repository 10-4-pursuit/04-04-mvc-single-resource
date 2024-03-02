const expess = require('express');
const app = expess();
const todoRoutes = require('./routes/todoRoutes');

app.use(expess.json());
app.use(todoRoutes);

module.exports = app;

