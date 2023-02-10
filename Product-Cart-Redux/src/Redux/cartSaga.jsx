import { delay, put, select, takeLatest } from "redux-saga/effects";

function* addToCart(action) {
  try {
    const { cartList, cartQuantity, totalAmount, productsID } = yield select(
      (state) => state.cart
    );

    state.cartList = [action.payload, ...state.cartList];
    state.totalAmount += action.payload.price;
    state.productsID = [action.payload.id, ...state.productsID];
    state.cartQuantity = [
      { id: action.payload.id, quantity: 1, price: action.payload.price },
      ...state.cartQuantity,
    ];
  } catch (error) {
    console.log("Error", error);
  }
}
export function* listenRequestFromCart() {
  yield takeLatest("cart/dummyAddToCart", addToCart);
}
