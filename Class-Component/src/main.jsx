import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiCall } from "./FunctionComponents/ApiCall/ApiCall";
import { CardLikeState } from "./FunctionComponents/CardLikeState/CardLikeState";
import { Parent } from "./FunctionComponents/ParentToChildWithState/Parent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiCall />
  </React.StrictMode>
);
