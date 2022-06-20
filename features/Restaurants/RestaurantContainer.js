import React from "react";
import styles from "../../styles/pages/restaurants.module.scss";
import RestaurantsCard from "../../components/Cards/RestaurantsCard";

export const RestaurantContainer = ({ restaurants }) => {
  let unique = [...new Set(restaurants.map((res) => res.type))];
  const [type, setType] = React.useState("All");

  const filterRestaurants = (restaurants) => {
    if (type === "All") {
      return restaurants.map((restaurant) => (
        <RestaurantsCard
          key={restaurant.id}
          name={restaurant.name}
          dess={restaurant.dess}
          price={restaurant.price}
        />
      ));
    } else {
      return restaurants
        .filter((restaurant) => restaurant.type === type)
        .map((filteredRestaurant) => (
          <RestaurantsCard
            key={filteredRestaurant.id}
            name={filteredRestaurant.name}
            dess={filteredRestaurant.dess}
            price={filteredRestaurant.price}
          />
        ));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <ul className={styles.container__left__list}>
          <li
            className={`${styles.container__left__list__item} ${
              type === "All" && styles.active
            }`}
            onClick={setType.bind(null, "All")}
          >
            <img src="/images/list-icon.svg" alt="list-icon" />
            <span className="All">All</span>
          </li>
          {unique.map((uniqueType) => (
            <li
              className={`${styles.container__left__list__item} ${
                type === uniqueType && styles.active
              }`}
              onClick={setType.bind(null, uniqueType)}
            >
              <img src="/images/list-icon.svg" alt="list-icon" />
              <span className="All">{uniqueType}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container__right}>
        {filterRestaurants(restaurants)}
      </div>
    </div>
  );
};
