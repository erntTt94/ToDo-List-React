import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text) return;

    const newItem = { text, completed: false, id: Date.now() };

    onAdd(newItem);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
