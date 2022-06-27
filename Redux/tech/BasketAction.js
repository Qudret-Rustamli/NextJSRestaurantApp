import { ADD_BASKET_ITEM, REMOVE_BASKET_ITEM } from '../types';

export const addBasket = (product) => {
  return {
    type: ADD_BASKET_ITEM,
    payload: product,
  };
};

export const removeBasket = (id) => {
  return {
    type: REMOVE_BASKET_ITEM,
    payload: id,
  };
};

export const replaceBasket = (products) => {
  return {
    type: REMOVE_BASKET_ITEM,
    payload: products,
  };
};