import { useState } from "react";
import createTodo from "../service/createTodo.service";
import toast from "react-hot-toast";
import updateTodo from "../service/updateTodo.service";

const useCreateTodo = ({ fetchUsers }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleFormSubmit = async (data: any) => {
    try {
      await createTodo(data);
      toast.success("Successfully Created!");
      fetchUsers();
    } catch (error) {
      toast.error("Something went worng.");
    }
    handleCloseModal();
  };
  const handleFormUpdate = async (data: any, id: string) => {
    try {
      await updateTodo(data, id);
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
