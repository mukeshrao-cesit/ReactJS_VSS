import React from "react";
import { useSelector } from "react-redux";
import MediaCard from "./Card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const productsList = useSelector((state) => state.productList.productList);
  const productsID = useSelector((state) => state.cartList.productsID);
  const navigate = useNavigate();
  console.log(productsList);
  return (
    <div>
      <button onClick={() => navigate("/cart")}>Cart</button>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {productsList.map((elem) => (
          <div key={elem.id}>
            {productsID.includes(elem.id) ? (
              <MediaCard data={elem} isInCart={true} />
            ) : (
              <MediaCard data={elem} isInCart={false} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
