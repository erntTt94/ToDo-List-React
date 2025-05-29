import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  function addTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function clearCompleted() {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  }

  const itemsLeft = todos.filter((t) => !t.completed).length;

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <div className="container">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <TodoInput onAdd={addTodo} />
      <TodoList
        onToggle={toggleTodo}
        todos={todos}
        onDelete={deleteTodo}
        filter={filter}
      />
      <Filters
        filter={filter}
        setFilter={setFilter}
        itemsLeft={itemsLeft}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
