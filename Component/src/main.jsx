import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiCall } from "./FunctionComponents/ApiCall/ApiCall";
import { CardLikeState } from "./FunctionComponents/CardLikeState/CardLikeState";
// import App from "./FunctionComponents/CleanUpFunction/App";
import { Main } from "./FunctionComponents/ListTree/Main";
import { Parent } from "./FunctionComponents/ParentToChildWithState/Parent";
import { TwoCompParent } from "./FunctionComponents/TwoCompRender/TwoCompParent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
