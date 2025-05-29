export default function Filters({
  filter,
  setFilter,
  onClearCompleted,
  itemsLeft,
}) {
  return (
    <div className="filters">
      <span>{itemsLeft} items left</span>
      <div>
        {["all", "active", "completed"].map((f) => (
          <button
            className={filter === f ? "active" : ""}
            key={f}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <button onClick={onClearCompleted} className="btn-delete">
        Clear Completed
      </button>
    </div>
  );
}
