import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  user: userReducer,
});