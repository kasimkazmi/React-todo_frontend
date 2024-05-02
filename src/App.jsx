import { useEffect, useState } from "react";
import { TodoForm, TodoList } from "./components/";
import { TodoPrvoider } from "./context";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: todos.length + 1, ...todo, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updatetodo = (updatetodo, id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, todo: updatetodo } : item
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoPrvoider
      value={{ todos, addTodo, deleteTodo, updatetodo, toggleTodo }}
    >
      <div className=" bg-gray-900 ">
        <div
          className=" w-full h-screen  max-w-xl
       mx-auto"
        >
          <TodoForm />

          {todos.map((item) => (
            <TodoList key={item.id} todo={item} />
          ))}
        </div>
      </div>
    </TodoPrvoider>
  );
}
