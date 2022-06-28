import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './BasketSlice';
import userReducer from './UserSlice';
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    users: userReducer,
  },
});
