const fs = require("fs");

const todos = require("./todos.json");

const getTodods = (req, res) => {
  res.status(200).send(todos);
};

const getTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id == id);
  if (todo) {
    return res.status(200).send(todo);
  }
  res.status(404).send({ msg: "Not found " });
};

const createTodo = async (req, res) => {
  const { title, completed = false, description } = req.body;
  if (!title || !description) {
    res.status(400).send({ msg: "Bad Request" });
    return;
  }
  // const todoList = JSON.parse(todos) || [];
  const todoList = todos;
  const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
  const todo = { id, title, completed, description };
  todoList.push(todo);
  fs.writeFile("./todos.json", JSON.stringify(todoList), (err) => {
    if (err) {
      res.status(500).send({ msg: `write failed!!` });
      return;
    }
    res.status(201).send(todo);
  });
};

module.exports = { getTodo, getTodods, createTodo };
