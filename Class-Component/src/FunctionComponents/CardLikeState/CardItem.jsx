import React from "react";
import "./Card.css";
export const CardItem = ({ data, handleLikeFunc }) => {
  const isLikedCSS = {
    color: "white",
    backgroundColor: "red",
  };
  return (
    <div
      style={data.isAlreadyLiked === true ? isLikedCSS : null}
      className="card-item"
      onClick={(e) => handleLikeFunc(data.id, data.isAlreadyLiked)}
    >
      <p className="profileName">{data.name}</p>
    </div>
  );
};
