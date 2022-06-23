import React, { useEffect } from 'react';
import styles from './RestaurantProductCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, removeBasket } from '../../../Redux/BasketSlice';

const RestaurantProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  //add to basket and local storage
  const addToBasket = (product) => {
    dispatch(addBasket(product));
  };

  useEffect(() => {
    //add to basket and local storage
    localStorage.setItem('basket', JSON.stringify(basket));
  });

  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <img
          className={styles.card__left__img}
          src={product.img}
          alt={product.name}
        />
        <div className={styles.card__left__desc}>
          {/* <p>Papa John’s Pizza Restaurant</p> */}
          <p>{product.name}</p>
        </div>
      </div>
      <div className={styles.card__right}>
        <p>$ {product.price}</p>
        <button onClick={() => addToBasket(product)} className={styles.card__right__btn}>
          +
        </button>
      </div>
    </div>
  );
};

export default RestaurantProductCard;
