const express = require('express');
const todoRouter = express.Router();
const todoController = require("../Controllers/todoController");

todoRouter.get("/", todoController.index)

todoRouter.post("/", todoController.create)

module.exports = todoRouter;