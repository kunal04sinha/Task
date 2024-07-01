import { Task } from "../models";

const specificTaskController = {
  async specificTask(req, res, next) {
    try {
      const id = req.params.id;
      const task = await Task.findById(id).select("-__v");
      if (!task) return res.json({ error: "Not Exists" });
      res.json(task);
    } catch (err) {
      return res.json({ error: "Task not found" });
    }
  },
};
export default specificTaskController;
