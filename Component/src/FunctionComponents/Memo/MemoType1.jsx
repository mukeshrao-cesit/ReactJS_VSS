import { useMemo, useState } from "react";

const UseMemoExample3 = () => {
  const [name, setName] = useState("");

  const number = useMemo(() => {
    let counter = 0;
    for (let i = 1; i <= 100; i++) {
      console.log("I: ", i);
      counter += i;
    }
    return counter;
  }, []);
  console.log("Re-render");

  return (
    <>
      <p>
        Counter:{number} {name}
      </p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default UseMemoExample3;
