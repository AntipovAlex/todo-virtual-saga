import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodosRequest } from "./store/actions";
import VirtualTodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [dispatch]);

  console.log(11111, todos);

  return (
    <div>
      <h1>To Do List</h1>
      <AddTodoForm />
      {Array.isArray(todos) && <VirtualTodoList todos={todos} />}
    </div>
  );
}
