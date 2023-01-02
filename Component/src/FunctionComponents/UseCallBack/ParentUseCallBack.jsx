import { useCallback, useState } from "react";
import ChildUseCallBack from "./ChildUseCallBack";

const ParentUseCallBack = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const updateCounter1 = useCallback(() => {
    setCounter1((prevState) => prevState + 1);
  }, []);

  const updateCounter2 = () => {
    setCounter2((prevState) => prevState + 1);
  };

  console.log("Parent Re-render");
  return (
    <>
      <p>Counter1: {counter1} </p>
      <p>Counter2: {counter2}</p>

      <ChildUseCallBack counter={counter1} onClick={updateCounter1} />

      <button onClick={updateCounter2}>Increment Counter 2</button>
    </>
  );
};

export default ParentUseCallBack;
