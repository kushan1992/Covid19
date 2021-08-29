import { combineReducers } from "redux";
import staticsReducer from "./statics";

export default combineReducers({
  statics: staticsReducer,
});
