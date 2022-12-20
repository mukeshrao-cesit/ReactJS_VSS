import React from "react";
import { Todo } from "./Todo";
import "./TodoList.css";

export const TodoList = ({
  todoID,
  setTodoID,
  todoList,
  handleTodoUpdate,
  handleTodoFilter,
}) => {
  return (
    <div className="TodoListContainer">
      <ul>
        {todoList.map((task) => (
          <Todo
            key={task.id}
            todo={task}
            todoID={todoID}
            setTodoID={setTodoID}
            handleTodoUpdate={handleTodoUpdate}
            handleTodoFilter={handleTodoFilter}
          />
        ))}
      </ul>
    </div>
  );
};
