import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { useDispatch } from "react-redux";
import axios from "axios";
import { initiateProducts } from "./Redux/productSlice";
import { Cart } from "./Components/Cart";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    try {
      const products = await axios
        .get("https://fakestoreapi.com/products")
        .then((data) => data.data)
        .catch((error) => console.log(error));
      dispatch(initiateProducts(products));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
