import { takeEvery, call } from "redux-saga/effects";
import { INCREASE_COUNT } from "../Service/ActionType.const";
import { IncNumber } from "../Service/Action/Action";
function* CountSaga() {
  try {
    yield call(IncNumber(0));
    return null;
  } catch (e) {}
}

export function* waitForCount() {
  yield takeEvery(INCREASE_COUNT, CountSaga);
}
