import { useState } from "react";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoListItems from "./components/TodoListItems";
import TodoProgress from "./components/TodoProgress";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (value) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: value,
        isCompleted: false,
      },
    ]);
  };

  const handleToggle = (id) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      };
    });

    setTodos(nextTodos);
  };

  const handleDelete = (id) => {
    const nextTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(nextTodos);
  };

  return (
    <div className="todoListContainer">
      <Header />
      <TodoInput onCreate={handleCreate} />
      <TodoListItems
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <TodoProgress todos={todos} />
    </div>
  );
}

export default App;