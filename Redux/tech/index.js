import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./BasketReducer";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
