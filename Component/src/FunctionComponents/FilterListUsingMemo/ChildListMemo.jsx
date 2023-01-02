import React from "react";

export const ChildListMemo = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((elem) => {
          return <li key={elem.id}>{elem.title}</li>;
        })}
      </ul>
    </div>
  );
};
