import React from "react";
import styles from "./RestaurantsCard.module.scss";

const RestaurantsCard = ({ restaurant }) => {
  const { name, dess, price, delivery, img } = restaurant;

  return (
    <div className={styles.cart}>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__wrapper__img}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.cart__wrapper__body}>
          <h3>{name}</h3>
          <p>{dess}</p>
        </div>
        <div className={styles.cart__wrapper__footer}>
          <div className={styles.cart__wrapper__footer__price}>
            <span>${price} delivery</span>
          </div>
          <div className={styles.cart__wrapper__footer__delivery}>
            <span>{delivery} Min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsCard;
