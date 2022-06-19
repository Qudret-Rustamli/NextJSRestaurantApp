import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, basket: [...state.basket, action.payload] };
    },
    remove: (state, action) => {
      return { ...state, basket: state.basket.filter((item) => item !== action.payload) };
    },
  },
});

export const { add, remove } = basketSlice.actions;

export default basketSlice.reducer;
