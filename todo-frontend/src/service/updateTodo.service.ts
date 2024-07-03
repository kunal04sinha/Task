import api from "./config";
import { todoArgs } from "./type";

const updateTodo = async (todo: todoArgs, id: string) => {
  try {
    const response = await api.put(`/tasks/${id}`, todo);
    return response;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export default updateTodo;
