import { useEffect, useState } from "react";

const CleanUpV2 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("First use Effect with [] dependency");

    return () => {
      console.log("First use Effect with [] dependency cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("Second use Effect with [counter1] dependency");

    return () => {
      console.log("Second use Effect with [counter1] dependency cleanup");
    };
  }, [counter1]);

  useEffect(() => {
    console.log("Third use Effect with [counter2] dependency");

    return () => {
      console.log("Third use Effect with [counter2] dependency cleanup");
    };
  }, [counter2]);

  return (
    <>
      <p>Counter1: {counter1}</p>
      <p>Counter2: {counter2}</p>

      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Incr. Counter 1
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Incr. Counter 2
      </button>
    </>
  );
};

export default CleanUpV2;
