/** @format */

import { combineReducers, createStore } from "redux";

import loginReducer from "../Reducer/loginReducer";

const reducers = combineReducers({
  loginReducer,
});

const store = createStore(reducers);

export default store;
