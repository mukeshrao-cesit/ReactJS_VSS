import React, { useState } from "react";
import { ChildMemo } from "./ChildMemo";

export const ParentMemo = () => {
  const [counter, setCounter] = useState(0);
  console.log("Parent Re-Render");
  return (
    <div>
      <ChildMemo />
      <p onClick={() => setCounter((prev) => prev + 1)}>Click Me : {counter}</p>
    </div>
  );
};
