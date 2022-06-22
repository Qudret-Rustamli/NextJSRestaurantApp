import { ADD_BASKET_ITEM, REMOVE_BASKET_ITEM } from './types';

const initialState = {
  basket: [],
};

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BASKET_ITEM:
      const existingItem = state.basket.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
      } else {
        return {
          ...state,
          basket: [
            ...state.basket.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          ],
        };
      }

    case REMOVE_BASKET_ITEM:
      return {
        ...state,
        basket: state.basket.filter((product) => product._id !== action.payload),
      };
    default:
      return state;
  }
}
