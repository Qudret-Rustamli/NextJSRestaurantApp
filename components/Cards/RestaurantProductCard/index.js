import React from "react";
import styles from "./RestaurantProductCard.module.scss";

const RestaurantProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <img
          className={styles.card__left__img}
          src="/images/product-test.svg"
          alt=""
        />
        <div className={styles.card__left__desc}>
          <p>Papa John’s Pizza Restaurant</p>
          <p>Prepared with a patty, a slice of cheese and special sauce</p>
        </div>
      </div>
      <div className={styles.card__right}>
        <p>$ 15</p>
        <button className={styles.card__right__btn}>+</button>
      </div>
    </div>
  );
};

export default RestaurantProductCard;
