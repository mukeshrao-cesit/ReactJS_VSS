import React from "react";

export const LeftSideComp = ({ products, handleClickedTitle }) => {
  return (
    <div style={{ width: "400px" }}>
      <ul>
        {products.map((elem) => {
          return (
            <li
              key={elem.id}
              onClick={(e) => handleClickedTitle(elem)}
              style={{ cursor: "pointer" }}
            >
              <p>{elem.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
