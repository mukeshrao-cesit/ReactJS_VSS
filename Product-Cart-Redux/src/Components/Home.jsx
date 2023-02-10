import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaCard from "./Card";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { fetchingProduct } from "../Redux/productSlice";
import { AddProductToCart } from "../Redux/cartSlice";

export const Home = () => {
  const { productList, isFetching } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const productsID = useSelector((state) => state.cartList.productsID);
  const cartItemsLength = useSelector((state) => state.cartList.cartList);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchingProduct());
  }, []);
  return (
    <>
      {isFetching ? (
        <p>Loading</p>
      ) : (
        <div>
          <div
            className="nav-bar"
            style={{
              width: "100%",
              backgroundColor: "#34495E",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              sx={{ margin: "20px", backgroundColor: "white" }}
              onClick={() => navigate("/cart")}
            >
              {cartItemsLength.length > 0
                ? "(" + cartItemsLength.length + ") "
                : "  "}
              Cart
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              margin: "20px",
              flexWrap: "wrap",
            }}
          >
            {productList != undefined &&
              productList.map((elem) => (
                <div key={elem.id}>
                  {productsID.includes(elem.id) ? (
                    <MediaCard data={elem} isInCart={true} />
                  ) : (
                    <MediaCard data={elem} isInCart={false} />
                  )}
                </div>
              ))}
            {/* {productsList != undefined &&
              productsList.map((elem) => (
                <div>
                  <MediaCard data={elem} isInCart={false} />
                </div>
              ))} */}
          </div>
        </div>
      )}
    </>
  );
};
