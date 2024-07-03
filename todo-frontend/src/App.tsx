import { useEffect, useState } from "react";
import "./App.css";
import getTodo from "./service/getTodo.service";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import useCreateTodo from "./hooks/useCreateTodo";
import ItemList from "./components/ItemsList";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  type GroupedData = {
    [key in "Pending" | "Completed" | "Other"]: DataItem[];
  };

  const groupedData: GroupedData = users?.reduce(
    (acc, item) => {
      if (item.status === "Pending" || item.status === "Completed") {
        acc[item.status].push(item);
      } else {
        acc.Other.push(item);
      }
      return acc;
    },
    { Pending: [], Completed: [], Other: [] }
  );

  const { handleCloseModal, handleFormSubmit, handleOpenModal, modalOpen } =
    useCreateTodo();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getTodo();
        setUsers(data?.task);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  console.log(users);
  const list1 = [
    { title: "Item 1", description: "Description 1", createTime: Date.now() },
    { title: "Item 2", description: "Description 2", createTime: Date.now() },
  ];

  const list2 = [
    { title: "Item A", description: "Description A", createTime: Date.now() },
    { title: "Item B", description: "Description B", createTime: Date.now() },
  ];

  const list3 = [
    { title: "Item X", description: "Description X", createTime: Date.now() },
    { title: "Item Y", description: "Description Y", createTime: Date.now() },
  ];
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Header onClick={handleOpenModal} />
      <div className="flex flex-wrap p-4">
        <ItemList items={groupedData.Other} title="Todo" />
        <ItemList items={groupedData.Pending} title="Pending" />
        <ItemList items={groupedData.Completed} title="completed" />
      </div>
      <CreateTodo
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
    </>
  );
}

export default App;
