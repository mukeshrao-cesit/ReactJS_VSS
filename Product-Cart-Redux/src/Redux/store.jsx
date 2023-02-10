import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    productList: productSlice,
    cartList: cartSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);
