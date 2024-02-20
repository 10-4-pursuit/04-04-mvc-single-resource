const express = require('express');
const router = express.Router();
const { listTodos, createTodo } = require('../controllers/todoController');

//desc list all todos route 
router.get('/todos', listTodos);

//desc create todo route
router.post('/todos', createTodo);

module.exports = router;