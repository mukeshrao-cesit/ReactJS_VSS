import React from "react";

export const InputBox = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name="name"
        value={props.inputName}
        onChange={(e) => props.setInputName(e.target.value)}
      />
    </div>
  );
};
InputBox.defaultProps = {
  type: "text",
  placeholder: "Enter your task...!",
};
