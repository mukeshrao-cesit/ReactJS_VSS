import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addProductQuantity, subProductQuantity } from "../Redux/cartSlice";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cartList.cartList);
  const totalAmount = useSelector((state) => state.cartList.totalAmount);
  const cartQuantity = useSelector((state) => state.cartList.cartQuantity);
  const dispatch = useDispatch();
  return (
    <div>
      {cartProducts.map((data) => (
        <Card key={data.id} sx={{ maxWidth: 245, margin: "10px" }}>
          <CardMedia
            sx={{ height: 100 }}
            image={data.image}
            title={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => dispatch(addProductQuantity(data.id))}
            >
              +
            </Button>
            {cartQuantity.map(
              (elem) =>
                elem.id === data.id && (
                  <p key={elem.id}>
                    {Number(elem.quantity)}
                    {console.log(elem)}
                  </p>
                )
            )}
            <Button
              variant="contained"
              onClick={() => dispatch(subProductQuantity(data.id))}
            >
              -
            </Button>
          </CardActions>
        </Card>
      ))}
      <h3>${totalAmount}</h3>
    </div>
  );
};
