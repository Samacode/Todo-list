import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodo((cur) => [text, ...cur]);

    setText("");
  }

  return (
    <div className="app">
      <h1>TODO</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {todo.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
