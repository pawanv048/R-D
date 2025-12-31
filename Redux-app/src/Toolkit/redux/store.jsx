import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import todoReducer  from "./slices/todoSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
  },
});
