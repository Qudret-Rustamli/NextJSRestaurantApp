import React from 'react';
import styles from '../../styles/pages/restaurants.module.scss';
import RestaurantsCard from '../../components/Cards/RestaurantsCard';
import Link from 'next/link';

export const RestaurantContainer = ({ restaurants }) => {
  let unique = [...new Set(restaurants.map((res) => res.type))];
  const [type, setType] = React.useState('All');

  const filterRestaurants = (restaurants) => {
    if (type === 'All') {
      return restaurants.map((restaurant) => (
        <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
          <a>
            <RestaurantsCard
              name={restaurant.name}
              dess={restaurant.dess}
              price={restaurant.price}
            />
          </a>
        </Link>
      ));
    } else {
      return restaurants
        .filter((restaurant) => restaurant.type === type)
        .map((filteredRestaurant) => (
          <Link key={filteredRestaurant.id} href={`/restaurants/${filteredRestaurant.id}`}>
            <a>
              <RestaurantsCard
                name={filteredRestaurant.name}
                dess={filteredRestaurant.dess}
                price={filteredRestaurant.price}
              />
            </a>
          </Link>
        ));
    }
  };
  const id = 1;
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <ul className={styles.container__left__list}>
          <li
            className={`${styles.container__left__list__item} ${type === 'All' && styles.active}`}
            onClick={setType.bind(null, 'All')}>
            <img src="/images/list-icon.svg" alt="list-icon" />
            <span className="All">All</span>
          </li>
          {unique.map((uniqueType) => (
            <li
              key={uniqueType}
              className={`${styles.container__left__list__item} ${
                type === uniqueType && styles.active
              }`}
              onClick={setType.bind(null, uniqueType)}>
              <img src="/images/list-icon.svg" alt="list-icon" />
              <span className="All">{uniqueType}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container__right}>{filterRestaurants(restaurants)}</div>
    </div>
  );
};
