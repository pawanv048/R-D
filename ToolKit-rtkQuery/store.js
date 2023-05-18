import { configureStore } from "@reduxjs/toolkit";
import { getApiCall } from "./GetApiCall";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [getApiCall.reducerPath]: getApiCall.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(getApiCall.middleware),
})


setupListeners(store.dispatch)
