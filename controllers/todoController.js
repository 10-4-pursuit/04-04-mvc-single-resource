const express = require('express');

const app = express();

const todos = [];

const listTodos = (req, res) => {
    res.json(todos);
  };

// Function to create a new todo item
const createTodo = (req, res) => {
    // Access the title from the request body
    const { title } = req.body;
  
    // Validate title (optional)
    if (!title) {
      return res.status(400).send("Title is required");
    }
  
    // Create a new todo object
    const newTodo = {
      id: Date.now(), // Generate unique ID
      title,
      completed: false, // Mark as not completed
    };
  
    // Add the new todo to the list
    todos.push(newTodo);
  
    // Send the created todo back in the response
    res.status(201).json(newTodo);
  };  