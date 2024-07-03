import api from "./config";

const getTodo = async ({ id }: { id?: string }) => {
  try {
    const response = await api.get(`/tasks${id ? `/${id}` : ""}`);
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

export default getTodo;
