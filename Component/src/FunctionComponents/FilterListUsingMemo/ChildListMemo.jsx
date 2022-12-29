import React from "react";

export const ChildListMemo = ({ products }) => {
  console.log(products);
  return (
    <div>
      <ul>
        {products.map((elem) => {
          <li key={elem.id}>{elem.price}</li>;
        })}
      </ul>
    </div>
  );
};
