import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CardLikeState } from "./FunctionComponents/CardLikeState/CardLikeState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardLikeState />
  </React.StrictMode>
);
