import React from "react";
import { useState } from "react";
import "./TodoList.css";

export const Todo = ({ todo, handleTodoFilter, handleTodoUpdate }) => {
  const [todoUpdateInput, setTodoUpdateInput] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  function handleTodoInput() {
    setTodoUpdateInput(!todoUpdateInput);
    if (todoUpdateInput) {
      handleTodoUpdate(todo.id, todoInput);
    }
  }
  return (
    <div className="TodoTaskContainer">
      <h5>{todo.task}</h5>
      <button
        onClick={(e) => {
          handleTodoFilter(todo.id);
        }}
      >
        Delete
      </button>
      <button onClick={handleTodoInput}>Update</button>
      <div>
        {todoUpdateInput && (
          <input
            className="updateInput"
            type={"text"}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};
