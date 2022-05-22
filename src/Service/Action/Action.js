import { INCREASE_COUNT, DECREASE_COUNT } from "../ActionType.const";
import { START_FETCH, PROCESS_FETCH, END_FETCH } from "../ActionType.const";

export const IncNumber = () => {
  return {
    type: INCREASE_COUNT,
    payload: "increase",
  };
};

export const DecNumber = () => {
  return {
    type: DECREASE_COUNT,
    payload: "decrease",
  };
};

export const fetchStart = (userName) => ({
  type: START_FETCH,
  payload: userName,
});

export const receiveDataSuccess = (data) => ({
  type: PROCESS_FETCH,
  payload: data,
});

export const receiveDataFailure = (error) => ({
  type: END_FETCH,
  payload: error,
});
