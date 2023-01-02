import React from "react";
import { useMemo, useState, useEffect } from "react";
import { ChildListMemo } from "./ChildListMemo";

export const ParentListMemo = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("useEffect re-render");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const isMatchingCharacter = (str, char) => {
    if (!str) return false;
    str = str.toLowerCase();
    char = char.toLowerCase();
    return str.match(char);
  };

  const data = useMemo(() => {
    console.log("useMemo re-render");
    const result = products.filter((item) => {
      const { title, description, category } = item;

      if (isMatchingCharacter(title, input)) {
        return true;
      }

      if (isMatchingCharacter(description, input)) {
        return true;
      }

      if (isMatchingCharacter(category, input)) {
        return true;
      }

      return false;
    });

    return result;
  }, [input, products]);

  console.log("re-render");

  return (
    <div>
      <input
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ChildListMemo products={data} />
    </div>
  );
};
