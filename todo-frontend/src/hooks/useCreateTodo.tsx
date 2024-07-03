import { useState } from "react";
import createTodo from "../service/createTodo.service";
import toast from "react-hot-toast";
import updateTodo from "../service/updateTodo.service";

const useCreateTodo = ({ fetchUsers }) => {
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
      fetchUsers();
    } catch (error) {
      toast.error("Something went worng.");
    }
    handleCloseModal();
  };
  const handleFormUpdate = async (data, id) => {
    try {
      const res = await updateTodo(data, id);
      toast.success("Successfully Update!");
      fetchUsers();
    } catch (error) {
      toast.error("Something went worng.");
    }
    handleCloseModal();
  };
  return {
    modalOpen,
    handleOpenModal,
    handleCloseModal,
    handleFormSubmit,
    setModalOpen,
    handleFormUpdate,
  };
};
export default useCreateTodo;
