const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const todoRoutes = require("./Routes/todoRoutes");

app.use(express.json());
app.use("/todos", todoRoutes);

module.exports = app;