import React from "react";
import { InputBox } from "./InputBox";
export const UpdateTodo = ({
  inputName,
  setInputName,
  handleTodoUpdateFunc,
}) => {
  return (
    <div>
      <InputBox
        inputName={inputName}
        placeholder="Enter the update input"
        setInputName={setInputName}
      />
      <button onClick={handleTodoUpdateFunc}>Update</button>
    </div>
  );
};
