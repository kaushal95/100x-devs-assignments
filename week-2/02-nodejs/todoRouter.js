const express = require("express");
const router = express.Router();
const { getTodo, getTodods, createTodo } = require("./todoControllers");

router.get("/", getTodods);
router.get("/:id", getTodo);
router.post("/", createTodo);

module.exports = router;
