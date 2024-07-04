import { useEffect, useState } from "react";
import "./App.css";
import getTodo from "./service/getTodo.service";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import useCreateTodo from "./hooks/useCreateTodo";
import ItemList from "./components/ItemsList";
import DeleteConfirmationModal from "./components/DeleteModal";
import deleteTodo from "./service/deleteTodo.service";
import toast from "react-hot-toast";
export interface DataItem {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "Completed" | "Other";
  createdAt: string;
  updatedAt: string;
}
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  type GroupedData = {
    [key in "Pending" | "Completed" | "Other"]: DataItem[];
  };
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string>("");
  const [isUpdate, setIsUpdate] = useState(false);

  const [updateId, setUpdateId] = useState("");
  const [updateData, setUpdatData] = useState({});
  const fetchUsers = async () => {
    try {
      const data = await getTodo({});
      setData(data?.task);
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteOnConfirm = async () => {
    try {
      await deleteTodo(deleteId);
      toast.success("Successfully Delete");
      setIsDeleteOpen(false);
      fetchUsers();
    } catch (error) {
      toast.error("Something went worng.");
    }
  };

  const groupedData: GroupedData = data.reduce<GroupedData>(
    (acc, item: DataItem) => {
      if (item?.status === "Pending") {
        acc.Pending.push(item);
      } else if (item?.status === "Completed") {
        acc.Completed.push(item);
      } else {
        acc.Other.push(item);
      }
      return acc;
    },
    { Pending: [], Completed: [], Other: [] }
  );

  const {
    handleCloseModal,
    handleFormSubmit,
    handleOpenModal,
    modalOpen,
    setModalOpen,
    handleFormUpdate,
  } = useCreateTodo({ fetchUsers });

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Header
        onClick={() => {
          setUpdateId("");

          setIsUpdate(false);
          setUpdatData({});

          handleOpenModal();
        }}
      />
      <div className="flex flex-wrap p-4">
        <ItemList
          items={groupedData.Other}
          title="Todo"
          handleDelete={(id: string) => {
            setDeleteId(id);
            setIsDeleteOpen(true);
          }}
          handleUpdate={async (id: string) => {
            setModalOpen(true);
            setIsUpdate(true);
            setUpdateId(id);
            const res = await getTodo({ id });
            setUpdatData(res);
          }}
        />
        <ItemList
          items={groupedData.Pending}
          title="Pending"
          handleDelete={(id: string) => {
            setDeleteId(id);
            setIsDeleteOpen(true);
          }}
          handleUpdate={async (id: string) => {
            setModalOpen(true);
            setIsUpdate(true);
            setUpdateId(id);
            const res = await getTodo({ id });
            setUpdatData(res);
          }}
        />
        <ItemList
          items={groupedData.Completed}
          title="Completed"
          handleDelete={(id: string) => {
            setDeleteId(id);
            setIsDeleteOpen(true);
          }}
          handleUpdate={async (id: string) => {
            setModalOpen(true);
            setIsUpdate(true);
            setUpdateId(id);
            const res = await getTodo({ id });
            setUpdatData(res);
          }}
        />
      </div>
      <CreateTodo
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={(data) => {
          if (isUpdate) {
            handleFormUpdate(data, updateId);
          } else {
            handleFormSubmit(data);
          }
        }}
        isUpdate={isUpdate}
        initialData={updateData}
      />
      <DeleteConfirmationModal
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteOnConfirm}
      />
    </>
  );
}

export default App;
