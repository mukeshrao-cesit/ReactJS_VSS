import React from "react";
import { useState } from "react";
import { ChildA } from "./ChildA";

export const Parent = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ChildA name={name === "" ? "NA" : name} />
    </div>
  );
};
