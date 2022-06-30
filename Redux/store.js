import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./BasketSlice";
import userReducer from "./UserSlice";
import restaurantsSlice from "./RestaurantsSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    users: userReducer,
    restaurant: restaurantsSlice,
  },
});
