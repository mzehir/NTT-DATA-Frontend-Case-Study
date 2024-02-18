import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../slices/apiSlice";
import productReducer from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    product: productReducer,
  },
});
