import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LeftSideComp } from "./LeftSideComp";
import { RightSideComp } from "./RightSideComp";

export const TwoCompParent = () => {
  const [clickedElem, setClickedElem] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);
  function handleClickedTitle(data) {
    setClickedElem({ ...data });
  }
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div>
        <LeftSideComp
          products={products}
          handleClickedTitle={handleClickedTitle}
        />
      </div>
      <div>{clickedElem && <RightSideComp productDesc={clickedElem} />}</div>
    </div>
  );
};
