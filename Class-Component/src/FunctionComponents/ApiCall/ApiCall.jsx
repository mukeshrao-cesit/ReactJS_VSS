import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ApiCall = () => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then((data) => data.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then((data) => data.json())
      .then((data) => setProducts(data.products));
  };
  return (
    <div>
      <input
        type={"text"}
        value={input}
        name="search"
        onChange={(e) => handleChange(e)}
      />
      <ul>
        {products.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
