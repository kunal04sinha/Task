import { useEffect, useState } from "react";
import createTodo from "../service/createTodo.service";
import toast from "react-hot-toast";

const useCreateTodo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleFormSubmit = async (data) => {
    try {
      const res = await createTodo(data);
      toast.success("Successfully Created!");
    } catch (error) {
      toast.error("Something went worng.");
    }
    handleCloseModal();
  };
  return { modalOpen, handleOpenModal, handleCloseModal, handleFormSubmit };
};
export default useCreateTodo;
