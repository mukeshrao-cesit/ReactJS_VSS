import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { ChildListMemo } from "./ChildListMemo";
export const ParentListMemo = () => {
  const [input, setInput] = useState("");
  const data = useMemo(() => {
    if (input !== "") {
      fetch(`https://fakestoreapi.com/products/category/${input}`)
        .then((res) => res.json())
        .then((json) => {
          return json;
        });
    }
  }, [input]);
  return (
    <div>
      {console.log(data)}
      <input type={"text"} onChange={(e) => setInput(e.target.value)} />
      <p onClick={data}>Click</p>
      <ChildListMemo products={data} />
    </div>
  );
};
