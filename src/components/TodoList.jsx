import { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Gå på skolen", done: true },
    { id: 2, description: "Spise middag", done: false },
    { id: 3, description: "Trene på treningsstudioet", done: false },
  ]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        description: input,
        done: false,
      },
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter((t) => t.done).length;
  const totalCount = todos.length;

  return (
    <div className="todo-card">
      <div className="header">
        <h1>Mine oppgaver</h1>
        <p className="subtitle">
          {completedCount} av {totalCount} fullført
        </p>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Legg til ny oppgave..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4V16M4 10H16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="todos-container">
        {todos.length === 0 ? (
          <p className="empty-state">Ingen oppgaver ennå. Legg til en! </p>
        ) : (
          todos.map((t) => (
            <Todo
              key={t.id}
              id={t.id}
              description={t.description}
              initialDone={t.done}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;