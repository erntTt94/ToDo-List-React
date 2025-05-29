import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, filter }) {
  const filtered = todos.filter(
    (t) =>
      filter === "all" ||
      (filter === "active" && !t.completed) ||
      (filter === "completed" && t.completed)
  );
  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
