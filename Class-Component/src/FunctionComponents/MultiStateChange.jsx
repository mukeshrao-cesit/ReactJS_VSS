import { useState } from "react";
export const MultiStateChange = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prev) => {
      return (prev += 1);
    });
    setCount((prev) => {
      return (prev += 1);
    });
    setCount((prev) => {
      return (prev += 1);
    });
  }
  return (
    <div>
      <button onClick={handleIncrement}>Click</button>
      <p>Count : {count}</p>
    </div>
  );
};
