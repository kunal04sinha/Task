import { Task } from "../models";
const updateTaskController = {
  async updateTask(req, res, next) {
    try {
      if (!req.body) {
        return res.status(404).json({
          message: "Please Valid ID",
        });
      }
      const id = req.params.id;
      const task = await Task.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false,
      });

      if (!task) return res.json({ error: "Not Exists" });
      res.status(200).json({ message: "Update Successfully" });
    } catch (err) {
      return res.json({ error: "opps" });
    }
  },
};
export default updateTaskController;
