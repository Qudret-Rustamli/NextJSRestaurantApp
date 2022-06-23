import React from 'react';
import styles from './RestaurantBasketCard.module.scss';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBasket,
  removeBasket,
  incrementBasket,
  decrementBasket,
} from '../../../Redux/BasketSlice';

const RestaurantBasketCard = ({ product }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);

  const handleRemove = (id) => {
    dispatch(removeBasket(id));
  };

  const handleIncrement = (product) => {
    dispatch(incrementBasket(product));
  };
  const handleDecrement = (product) => {
    dispatch(decrementBasket(product));
  };
  return (
    <div className={styles.card}>
      <div onClick={() => handleRemove(product.id)} className={styles.card__delete}>
        <DeleteSweepIcon onClick={() => handleRemove(product.id)} />
      </div>

      <div className={styles.card__desc}>
        <img src="/images/product-test.svg" alt="" />
        <div>
          <p>Papa John’s Pizza Restaurant</p>
          <p>$ {product.price}</p>
        </div>
      </div>

      <div className={styles.card__count}>
        <span onClick={() => handleIncrement(product)}>+</span>
        <p>{product.quantity}</p>
        <span onClick={() => handleDecrement(product)} id="removeItem">-</span>
      </div>
    </div>
  );
};

export default RestaurantBasketCard;
