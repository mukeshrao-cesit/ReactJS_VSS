import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todoList }) => {
  return (
    <div>
      <ul>
        {todoList.map((task, index) => (
          <Todo key={index} todo={task} />
        ))}
      </ul>
    </div>
  );
};
