import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const id = crypto.randomUUID();
  function handleAddTodo(newText) {
    setTodo((curText) => [newText, ...curText]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!text) return;

    const newObj = {
      id,
      text,
      checked: false,
    };

    handleAddTodo(newObj);

    setText("");
  }

  function handleClick(id) {
    setTodo((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }

  function handleDelete(id) {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  }
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="app">
      <h1>TODO</h1>
      <p className="date-info">{today}</p>
      <form className="form" onSubmit={handleSubmit}>
        <button>+</button>
        <input
          type="text"
          placeholder="Write a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id} className="todos">
            <input
              className="checkbox"
              type="checkbox"
              value={todo.checked}
              onClick={() => handleClick(todo.id)}
            />
            <p className={todo.checked ? "text-line-through" : "text"}>
              {todo.text}
            </p>
            <p className="delete" onClick={() => handleDelete(todo.id)}>
              X
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
