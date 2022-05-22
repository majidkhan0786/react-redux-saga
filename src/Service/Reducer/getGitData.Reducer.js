import { START_FETCH, PROCESS_FETCH, END_FETCH } from "../ActionType.const";

export const Data_KEY = "getDataStore";
let initialState = {
  loading: false,
  data: {},
  error: "",
};

const getData = function (state = initialState, action) {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        loading: true,
      };

    case PROCESS_FETCH:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case END_FETCH:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getData;
