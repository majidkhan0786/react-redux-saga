import { INCREASE_COUNT, DECREASE_COUNT } from "../ActionType.const";

export const COUNTER_KEY = "counterStore";
let initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
