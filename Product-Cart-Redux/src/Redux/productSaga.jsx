import { put, takeLatest } from "redux-saga/effects";
import { initiateProducts } from "./productSlice";
import axios from "axios";
function* apiProducts() {
  try {
    const products = yield axios.get("https://fakestoreapi.com/products");
    yield put(initiateProducts(products.data));
  } catch (error) {
    console.log(error);
  }
}
export function* listenRequestFromApi() {
  yield takeLatest("products/fetchingProduct", apiProducts);
}
