import joi from "joi";
import { Task } from "../models";
const addTaskController = {
  async addTask(req, res, next) {
    const task = joi.object({
      title: joi.string().required(),
      description: joi.string().required(),
      status: joi.string().required(),
    });
    const { error } = task.validate(req.body);
    if (error) {
      return res.status(400).json({ error: "Filed should not be empty" });
    }

    const { title, description, status } = req.body;

    // Perpare the model.

    const add = new Task({ title, description, status });

    // Save data into the dataBase
    try {
      await add.save();
    } catch (error) {
      return res.status(400).json({ error: "Something went Wrong" });
    }
    res.status(200).json({ msg: "Data Successfully Added" });
  },
};
export default addTaskController;
