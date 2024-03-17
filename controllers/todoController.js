let todos = []; 

const listTodos = (req, res) => {
    res.json(todos);
};

const createTodo = (req, res) => {
    const { title, completed } = req.body;
    const newTodo = { id: todos.length + 1, title, completed };
    todos.push(newTodo);
    res.status(200).json(newTodo);
};

const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    res.json(todo);
};

const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    const todoToUpdate = todos.find(todo => todo.id === id);
    todoToUpdate.title = title  
    todoToUpdate.completed = completed 
    res.json(todoToUpdate);
};


const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    res.json('Todo deleted successfully');
};
module.exports = { listTodos, createTodo, getTodoById,updateTodo, deleteTodo };