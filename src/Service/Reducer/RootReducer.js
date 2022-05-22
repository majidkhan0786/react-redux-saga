import CounterReducer from "./Reducers";
import getData from "./getGitData.Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterStore: CounterReducer,
  getDataStore: getData,
});

export default rootReducer;
