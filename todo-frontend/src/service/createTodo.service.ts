import api from "./config";
import { todoArgs } from "./type";

const createTodo = async (todo: todoArgs) => {
  try {
    const response = await api.post("/tasks", todo);
    return response.data;
  } catch (error: any) {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out:", error.message);
    } else {
      console.error("Error fetching users:", error);
    }
    throw error;
  }
};

export default createTodo;
