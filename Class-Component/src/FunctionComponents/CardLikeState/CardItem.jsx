import React from "react";

export const CardItem = ({ data, handleLikeFunc }) => {
  return (
    <div>
      {data.isAlreadyLiked ? (
        <p
          style={{ backgroundColor: "red" }}
          onClick={(e) => handleLikeFunc(data.id, data.isAlreadyLiked)}
        >
          {data.name}
        </p>
      ) : (
        <p
          style={{ backgroundColor: "white" }}
          onClick={(e) => handleLikeFunc(data.id, data.isAlreadyLiked)}
        >
          {data.name}
        </p>
      )}
    </div>
  );
};
