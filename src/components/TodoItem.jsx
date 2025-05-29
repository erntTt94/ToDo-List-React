export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <button
        className={todo.completed ? "checked" : ""}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed ? (
          <img src="images/icon-check.svg" alt="checked" />
        ) : null}
      </button>
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      {todo.completed && (
        <button className="btn-d" onClick={() => onDelete(todo.id)}>
          {" "}
          <img src="images/icon-cross.svg" alt="cross icon" />
        </button>
      )}
    </li>
  );
}
