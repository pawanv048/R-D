import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "./MyProductSlice";
import MyCartReducer from './MyCartSlice';

export const myStore = configureStore({
    reducer: {
      product: MyProductReducer,
      cart: MyCartReducer
    }
})

