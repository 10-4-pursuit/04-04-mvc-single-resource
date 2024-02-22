let toDos = [];

const index = (req, res) => {
    res.json(toDos);
}

const create = (req, res) => {
    const newToDo = req.body;
    newToDo.id = toDos.length + 1
    toDos.push(newToDo);
    res.json(newToDo)
}

module.exports = {
    index,
    create
}