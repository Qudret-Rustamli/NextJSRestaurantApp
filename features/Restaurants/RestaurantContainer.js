import React from "react";
import styles from "../../styles/pages/restaurants.module.scss";
import RestaurantsCard from "../../components/Cards/RestaurantsCard";

export const RestaurantContainer = ({ restaurants }) => {
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
          
        </ul>
      </div>
      <div className={styles.container__right}>
        {restaurants.map((restaurant) => (
          <RestaurantsCard
            name={restaurant.name}
            dess={restaurant.dess}
            price={restaurant.price}
          />
        ))}
      </div>
    </div>
  );
};
