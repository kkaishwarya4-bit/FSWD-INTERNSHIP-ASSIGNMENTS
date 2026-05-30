const Task = require("../models/Task");


// GET all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
};


// CREATE task
const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
  });

  const savedTask = await newTask.save();

  res.json(savedTask);
};


// UPDATE task
const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedTask);
};


// DELETE task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({ message: "Task Deleted" });
};


module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};