import { Task } from "../models";

const allTaskController = {
  async allTak(req, res, next) {
    try {
      const task = await Task.find().select("-__v");
      res.status(200).json({ DataLength: task.length, task });
    } catch (err) {
      return res.json({ error: "No data avialable" });
    }
  },
};
export default allTaskController;
