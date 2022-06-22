import React from 'react';
import styles from './RestaurantProductCard.module.scss';

const RestaurantProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <img className={styles.card__left__img} src={product.img} alt={product.name} />
        <div className={styles.card__left__desc}>
          {/* <p>Papa John’s Pizza Restaurant</p> */}
          <p>{product.name}</p>
        </div>
      </div>
      <div className={styles.card__right}>
        <p>$ {product.price}</p>
        <button className={styles.card__right__btn}>+</button>
      </div>
    </div>
  );
};

export default RestaurantProductCard;
