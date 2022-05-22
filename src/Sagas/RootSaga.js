import { all } from "redux-saga/effects";
import { waitForCount } from "./Count.saga";
import { fetchDataSaga } from "./FetchData.saga";
export default function* rootSaga() {
  yield all([waitForCount(), fetchDataSaga()]);
}
