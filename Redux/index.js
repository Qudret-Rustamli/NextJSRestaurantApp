import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './BasketReducer';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
