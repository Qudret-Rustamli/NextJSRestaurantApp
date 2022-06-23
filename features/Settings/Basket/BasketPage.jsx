import style from './style.module.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BasketCard from '../../../components/Cards/BasketCard/BasketCard';
import { useSelector, useDispatch } from 'react-redux';
import { removeBasket } from '../../../Redux/BasketSlice';
import { useEffect } from 'react';

const BasketPage = ({ count }) => {
  /* const dispatch = useDispatch(); */
  /* const basket = useSelector((state) => state.basket); */
  /* const basket = JSON.parse(localStorage.getItem('basket')); */

  return (
    <div className={style.container}>
      <h3 className={style.container__title}>Your Basket</h3>
      <div className={style.container__count}>
        <ShoppingBasketIcon className={style.container__count__icon} />
        <div className={style.container__count__number}>{count || 0} items</div>
      </div>
      <div className={style.container__contents}>
        {/* basket?.map((item) => (
          <BasketCard key={item.id} item={item} />
        )) */}
      </div>
      <div className={style.container__button}>
        <span className={style.container__button__checkout}>Checkout</span>
        <span className={style.container__button__price}>$ 40</span>
      </div>
    </div>
  );
};

export default BasketPage;
