import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  restaurants: [],
};

export const restaurantsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchRestaurantsData: (state, action) => {
      return {
        ...state,
        restaurants: action.payload,
      };
    },
  },
});

export const { fetchRestaurantsData } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
