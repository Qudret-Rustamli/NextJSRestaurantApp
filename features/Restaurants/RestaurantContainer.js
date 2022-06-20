import React from "react";
import styles from "../../styles/pages/restaurants.module.scss";
import RestaurantsCard from "../../components/Cards/RestaurantsCard";

export const RestaurantContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <ul className={styles.container__left__list}>
          <li
            className={`${styles.container__left__list__item} ${styles.active}`}
            data-id="All"
          >
            <img src="/images/list-icon.svg" alt="list-icon" />
            <span className="All">All</span>
          </li>
          <li className={styles.container__left__list__item} data-id="All">
            <img src="/images/list-icon.svg" alt="list-icon" />
            <span className="All">All</span>
          </li>
          <li className={styles.container__left__list__item} data-id="All">
            <img src="/images/list-icon.svg" alt="list-icon" />
            <span className="All">All</span>
          </li>
        </ul>
      </div>
      <div className={styles.container__right}>
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
        <RestaurantsCard
          name="Coffee Mania"
          dess="Coffee & Wine bar"
          price="5"
        />
      </div>
    </div>
  );
};
