import { createStore, combineReducers } from "redux";
import getValueReducer from "./reducers/getValueReducer";

const reducers = combineReducers({
  getValue: getValueReducer,
});

const store = createStore(reducers);

export default store;
