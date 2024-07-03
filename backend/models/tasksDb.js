import { required } from "joi";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: "string", required: true },
    status: { type: "string", default: "Pending" },
  },
  { timestamps: true }
);
export default mongoose.model("Task", taskSchema, "Tasks");
