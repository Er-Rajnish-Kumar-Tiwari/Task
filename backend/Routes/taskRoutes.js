// === task-backend/routes/taskRoutes.js ===
const express = require("express");
const Task = require("../Models/Task");
const auth = require("../Middleware/authMiddleware");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

router.post("/", auth, async (req, res) => {
  const task = new Task({ title: req.body.title, userId: req.userId });
  await task.save();
  res.status(201).json(task);
});

module.exports = router;
