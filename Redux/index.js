import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './Slicers/BasketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
