import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state = initialState, action) => {
      const existingItem = state.basket.find((item) => item.id === action.payload.id);

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
      } else {
        return {
          //update quantity and price
          ...state,
          basket: [
            ...state.basket.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity < 9 ? item.quantity + 1 : item.quantity,
                  }
                : item,
            ),
          ],
        };
      }
    },
    replaceBasket: (state, action) => {
      return {
        ...state,
        basket: action.payload,
      };
    },
    removeBasket: (state, action) => {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    },
    incrementBasket: (state, action) => {
      //if quantity great than 10, message error
      if (action.payload.quantity > 9) {
        alert('You can not add more than 10 items');
      } else {
        return {
          ...state,
          //update quantity and price
          basket: [
            ...state.basket.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          ],
        };
      }
    },
    decrementBasket: (state, action) => {
      //if quantity is 0, remove item from basket
      if (action.payload.quantity <= 1) {
        return {
          ...state,
          basket: state.basket.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          //update quantity and price
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item,
          ),
        };
      }
    },
  },
});

export const {addBasket, replaceBasket,removeBasket,incrementBasket,decrementBasket} =
  basketSlice.actions;

export default basketSlice.reducer;
