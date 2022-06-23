import React from "react";
import styles from "./RestaurantBasketCard.module.scss";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { useDispatch, useSelector } from "react-redux";
import { addBasket,removeBasket } from "../../../Redux/BasketAction";
const RestaurantBasketCard = () => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
 
  return (
    <div className={styles.card}>
      <div className={styles.card__delete}>
        <DeleteSweepIcon />
      </div>

      <div className={styles.card__desc}>
        <img src="/images/product-test.svg" alt="" />
        <div>
          <p>Papa John’s Pizza Restaurant</p>
          <p>$15.80</p>
        </div>
      </div>

      <div className={styles.card__count}>
        <span>+</span>
        <p>10</p>
        <span id="removeItem">-</span>
      </div>
    </div>
  );
};

export default RestaurantBasketCard;
