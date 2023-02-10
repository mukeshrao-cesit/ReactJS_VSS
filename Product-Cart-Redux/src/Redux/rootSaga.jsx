import { all, fork } from "redux-saga/effects";
import { listenRequestFromApi } from "./productSaga";
import { listenRequestFromCart } from "./cartSaga";

export default function* rootSaga() {
  yield all([fork(listenRequestFromApi), fork(listenRequestFromCart)]);
}
