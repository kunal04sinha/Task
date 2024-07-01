import express from "express";
const router = express.Router();
import {
  addTaskController,
  allTaskController,
  specificTaskController,
  updateTaskController,
  deleteTaskController,
} from "../Controllers";
//POST
router.post("/tasks", addTaskController.addTask);
//Get
router.get("/tasks", allTaskController.allTak);
router.get("/tasks/:id", specificTaskController.specificTask);
// Put
router.put("/tasks/:id", updateTaskController.updateTask);
//Delete
router.delete("/tasks/:id", deleteTaskController.deleteTask);
export default router;
