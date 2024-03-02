const toDos = [
    {
        id: 1,
        title: 'Todo 1',
        completed: false
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false
    },
    {
        id: 3,
        title: 'Todo 3',
        completed: true
    }
];

module.exports = {
    listTodos: (req, res) => {
        res.send(toDos);
    },
    
    createTodo: (req, res) => {
        const {title , completed = false} = req.body;

        const newTodo = {
            id: toDos.length + 1,
            title,
            completed
        };

        toDos.push(newTodo);
        res.send(newTodo);
    }
};


