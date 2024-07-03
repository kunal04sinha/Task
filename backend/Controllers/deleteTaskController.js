import { Task } from "../models";
const deleteTaskController = {
  async deleteTask(req, res, next) {
    try {
      const id = req.params.id;
      const task = await Task.findByIdAndDelete(id);
      res.status(200).json({ message: "Task deleted" });
    } catch (err) {
      return res.json({ message: "Something went wrong" });
    }
  },
};
export default deleteTaskController;
