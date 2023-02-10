import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../Redux/cartSlice";

export default function MediaCard({ data, isInCart }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(AddProductToCart(data));
  }
  return (
    <Card sx={{ maxWidth: 345, height: 330 }}>
      <div style={{ display: "flex", justifyContent: "center", margin: "5px" }}>
        <img
          src={data.image}
          style={{ width: "160px", height: "200px" }}
          alt="productImage"
        />
      </div>
      <CardContent sx={{ width: "160px" }}>
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            width: "160px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          component="div"
        >
          {data.title}
        </Typography>
      </CardContent>
      <CardActions>
        {isInCart ? (
          <Button variant="contained" disabled>
            Added To Cart
          </Button>
        ) : (
          <Button size="small" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
