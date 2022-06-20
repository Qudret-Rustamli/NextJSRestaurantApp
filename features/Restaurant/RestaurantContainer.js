import React from 'react';
import styles from '../../styles/pages/restaurant.module.scss';
import RestaurantProductCard from '../../components/Cards/RestaurantProductCard';
import RestaurantBasketCard from '../../components/Cards/RestaurantBasketCard';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export const RestaurantContainer = ({ restaurant }) => {
  var products = restaurant.products;

  return (
    <>
      {/* Restaurant info */}
      <div className={styles.restaurant}>
        <div className={styles.restaurant__img}>
          <img src={restaurant.img} alt={restaurant.img} />
        </div>
        <div className={styles.restaurant__desc}>
          <div className={styles.restaurant__desc__left}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
          </div>
          <div className={styles.restaurant__desc__right}>
            <div className={styles.restaurant__desc__right__category}>
              <h4>Cuisine</h4>
              <p>{restaurant.dess}</p>
            </div>
            <div className={styles.restaurant__desc__right__btns}>
              <button>${restaurant.delivery} Delivery</button>
              <button>Go Back</button>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className={styles.products}>
        <div className={styles.products__left}>
          <h3>Products</h3>
          {products.map((product) => (
            <RestaurantProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className={styles.products__right}>
          <div className={styles.products__right__top}>
            <span className={styles.products__right__count__icon}>
              <ShoppingBasketOutlinedIcon />
            </span>
            <span className={styles.products__right__count__icon_count}>0 items</span>
          </div>
          <div className={styles.products__right__body}>
            <div className={styles.products__right__body__list}>
              <RestaurantBasketCard />
              <RestaurantBasketCard />
              <RestaurantBasketCard />
              <RestaurantBasketCard />
              <RestaurantBasketCard />
              <RestaurantBasketCard />
              <RestaurantBasketCard />
              <RestaurantBasketCard />
            </div>
            <div className={styles.products__right__body__checkout}>
              <p>Checkout</p>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantContainer;
