import "regenerator-runtime/runtime";
import { all, fork } from "redux-saga/effects";
import * as productPageSaga from "./productPageSaga";


// Root sagas
// Single entry point to start all sagas at once
export default function* rootSaga() {
  yield all(
    [...Object.values(productPageSaga)].map(fork)
  );
  }