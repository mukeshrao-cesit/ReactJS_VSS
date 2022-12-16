import React from "react";
import { useState } from "react";
import "./TodoList.css";

export const Todo = ({ todo, handleTodoFilter, handleTodoUpdate }) => {
  const [todoUpdateInput, setTodoUpdateInput] = useState(false);
  const [todoInput, setTodoInput] = useState(todo.task);
  function handleTodoInput() {
    setTodoUpdateInput(!todoUpdateInput);
    if (todoUpdateInput) {
      handleTodoUpdate(todo.id, todoInput);
    }
  }
  return (
    <div className="TodoTaskContainer">
      {todoUpdateInput ? (
        <input
          className="updateInput"
          type={"text"}
          value={todoInput}
          placeholder="Enter the update input"
          onChange={(e) => setTodoInput(e.target.value)}
        />
      ) : (
        <h5>{todo.task}</h5>
      )}
      <button
        onClick={(e) => {
          handleTodoFilter(todo.id);
        }}
      >
        Delete
      </button>
      <button onClick={handleTodoInput}>Update</button>
    </div>
  );
};

// To find the closest number in an array from the given input
// // Input
// const inputArr = [1, 10, 7, 2, 4, 9];
// const nearbyNumber = 5;

// // Output
// 4;
