import style from './style.module.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BasketCard from '../../../components/Cards/BasketCard/BasketCard';
import { useSelector,useDispatch } from 'react-redux';

export const BasketContainer = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const totalPrice = basket.reduce((total, item) =>  total + item.price * item.quantity, 0);  return (
    <div className={style.container}>
      <h3 className={style.container__title}>Your Basket</h3>
      <div className={style.container__count}>
        <ShoppingBasketIcon className={style.container__count__icon} />
        <div className={style.container__count__number}>
          {basket.length} items
        </div>
      </div>
      <div className={style.container__contents}>
        {basket.length > 0 ? (
          basket.map((item) => <BasketCard key={item.id} item={item} />)
        ) : (
          <div>Your basket is empty</div>
        )}
      </div>
      <div className={style.container__button}>
        <span className={style.container__button__checkout}>Checkout</span>
        <span className={style.container__button__price}>$ {totalPrice}</span>
      </div>
    </div>
  );
};