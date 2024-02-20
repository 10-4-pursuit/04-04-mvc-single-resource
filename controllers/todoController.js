let todos = [];

const listTodos = (req, res) => {
    res.json(todos);
}

const createTodo = (req, res) => {
    const {title, completed = false} = req.body;
    const newTodo = {
        id: Date.now(),
        title,
        completed
    };
    todos.push(newTodo);
    res.status(200).json(newTodo);
}

module.exports = {
    listTodos,
    createTodo
}