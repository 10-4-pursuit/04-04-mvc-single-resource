const express = require('express');
const {listToDos, createToDo, validateToDo, updateToDo, deleteToDo} = require ('../controllers/todoController');
const router = express.Router();

router.use(express.json());

router.get('/',  listToDos );
router.post('/', validateToDo, createToDo);
router.put('/:id', updateToDo);
router.delete('/:id', deleteToDo);

module.exports=router
