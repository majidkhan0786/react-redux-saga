import { takeLatest, put, call } from "redux-saga/effects";
import { START_FETCH } from "../Service/ActionType.const";
import {
  receiveDataSuccess,
  receiveDataFailure,
} from "../Service/Action/Action";
import axios from "axios";

function* onFetchData({ payload }) {
  try {
    const response = yield call(axios.get, [
      `https://api.github.com/users/${payload}`,
    ]);
    // console.log(response, 445);
    yield put(receiveDataSuccess(response.data));
  } catch (e) {
    yield put(receiveDataFailure(e));
  }
}

export function* fetchDataSaga() {
  yield takeLatest(START_FETCH, onFetchData);
}
