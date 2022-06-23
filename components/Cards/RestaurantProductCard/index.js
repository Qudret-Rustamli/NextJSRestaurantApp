import React from "react";
import styles from "./RestaurantProductCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../Redux/BasketAction";

const RestaurantProductCard = ({ product }) => {
  const dispatch = useDispatch();

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
        <button
          onClick={() => dispatch(addBasket(product))}
          className={styles.card__right__btn}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default RestaurantProductCard;
