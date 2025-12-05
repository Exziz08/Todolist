import { useState } from "react";

const Todo = ({ id, description, initialDone, onToggle, onDelete }) => {
  const [done, setDone] = useState(initialDone);

  const handleToggle = () => {
    setDone(!done);
    onToggle(id);
  };

  return (
    <div className="todo-item">
      <div className="todo-content" onClick={handleToggle}>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={done}
            onChange={() => {}}
            className="todo-checkbox"
          />
          <div className={`custom-checkbox ${done ? "checked" : ""}`}>
            {done && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                  d="M1 5L4.5 8.5L11 1.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <p className={`todo-text ${done ? "done" : ""}`}>{description}</p>
      </div>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        aria-label="Slett todo"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo;