import React from "react";
import styles from "./RestaurantsCard.module.scss";

const RestaurantsCard = (props) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__wrapper__img}>
          <img src="/images/restaurants/burger-king.jpg" alt="" />
        </div>
        <div className={styles.cart__wrapper__body}>
          <h3>{props.name}</h3>
          <p>{props.dess}</p>
        </div>
        <div className={styles.cart__wrapper__footer}>
          <div className={styles.cart__wrapper__footer__price}>
            <span>${props.price} delivery</span>
          </div>
          <div className={styles.cart__wrapper__footer__delivery}>
            <span>0${props.delivery} Min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsCard;
