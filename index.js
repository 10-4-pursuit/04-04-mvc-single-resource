const controller = require('./controllers/todoController')
const express = require('express');
const routes = require('./routes/todoRoutes')

const app = express();


app.use("/todos", routes);

app.get('/', (req, res) => {    
res.send("save the world")
}
)

module.exports = app