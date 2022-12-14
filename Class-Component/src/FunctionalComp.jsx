import React from "react";
import { useState } from "react";

export const FunctionalComp = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleIncrement}>Click</button>
      <p>Count : {count}</p>
    </div>
  );
};
