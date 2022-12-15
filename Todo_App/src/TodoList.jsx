import React from "react";
import { Todo } from "./Todo";
import "./TodoList.css";

export const TodoList = ({ todoList, handleTodoFilter, handleTodoUpdate }) => {
  return (
    <div className="TodoListContainer">
      <ul>
        {todoList.map((task) => (
          <Todo
            key={task.id}
            todo={task}
            handleTodoFilter={handleTodoFilter}
            handleTodoUpdate={handleTodoUpdate}
          />
        ))}
      </ul>
    </div>
  );
};
