import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 240 }} image={data.image} title={data.title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.title}
        </Typography>
      </CardContent>
      <CardActions>
        {isInCart ? (
          <Button variant="contained" disabled>
            Already Added To Cart
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
