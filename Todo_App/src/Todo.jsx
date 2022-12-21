import React from "react";
import { useState } from "react";
import "./TodoList.css";
import { UpdateTodo } from "./UpdateTodo";

export const Todo = ({
  setTodoID,
  todoID,
  todo,
  handleTodoUpdate,
  handleTodoFilter,
}) => {
  const [todoInput, setTodoInput] = useState(todo.task);
  function handleTodoInput() {
    setTodoID(todo.id);
  }
  function handleTodoUpdateFunc() {
    handleTodoUpdate(todo.id, todoInput);
  }
  return (
    <div className="TodoTaskContainer">
      {todo.id === todoID ? (
        <>
          <UpdateTodo
            inputName={todoInput}
            setInputName={setTodoInput}
            handleTodoUpdateFunc={handleTodoUpdateFunc}
          />
        </>
      ) : (
        <>
          <h5>{todo.task}</h5>
          <button
            onClick={(e) => {
              handleTodoFilter(todo.id);
            }}
          >
            Delete
          </button>
          <button onClick={handleTodoInput}>Update</button>
        </>
      )}
    </div>
  );
};

// To find the closest number in an array from the given input
// // Input
// const inputArr = [1, 10, 7, 2, 4, 9];
// const nearbyNumber = 5;

// // Output
// 4;
