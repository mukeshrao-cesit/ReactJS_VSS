import React from "react";
import { ChildB } from "./ChildB";

export const ChildA = ({ name }) => {
  return (
    <div>
      <p>My name in Child A is {name}</p>
      <ChildB name={name === "" ? "NA" : name} />
    </div>
  );
};
