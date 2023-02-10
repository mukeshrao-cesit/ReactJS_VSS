import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductQuantity,
  removeAllItemsInCart,
  removeItemFromCart,
  subProductQuantity,
} from "../Redux/cartSlice";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cartList.cartList);
  const totalAmount = useSelector((state) => state.cartList.totalAmount);
  const cartQuantity = useSelector((state) => state.cartList.cartQuantity);
  const dispatch = useDispatch();

  function handleRemoveCart() {
    alert("Do you really want to delete this cart?");
    dispatch(removeAllItemsInCart());
  }
  function handleRemoveItem(id, price) {
    alert("Do you really want to delete this item?");
    dispatch(removeItemFromCart({ id, price }));
  }
  return (
    <div>
      {console.log(cartProducts)}
      <div
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
          onClick={handleRemoveCart}
        >
          Clear Cart
        </Button>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          {cartProducts.map((data) => (
            <Card key={data.id} sx={{ maxWidth: 645, margin: "10px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "5px",
                  }}
                >
                  <img
                    src={data.image}
                    style={{ width: "160px", height: "160px" }}
                    alt="productImage"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {data.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  {cartQuantity.map((elem) =>
                    elem.id === data.id ? (
                      <div
                        key={elem.id}
                        style={{ display: "flex", gap: "8px" }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => dispatch(addProductQuantity(data.id))}
                        >
                          +
                        </Button>
                        <p>{Number(elem.quantity)}</p>
                        <Button
                          variant="contained"
                          onClick={() =>
                            elem.quantity <= 1
                              ? handleRemoveItem(data.id, elem.price)
                              : dispatch(subProductQuantity(data.id))
                          }
                        >
                          -
                        </Button>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </CardActions>
              </div>
            </Card>
          ))}
        </div>
        <h3>${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};
