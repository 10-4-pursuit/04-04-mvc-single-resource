const express = require('express');
const router = express.Router();
const { listTodos, createTodo, getTodoById,updateTodo, deleteTodo } = require('../controllers/todoController');

router.get('/', listTodos);
router.post('/', createTodo);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;