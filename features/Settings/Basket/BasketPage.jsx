import style from './style.module.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BasketCard from '../../../components/Cards/BasketCard/BasketCard';

const BasketPage = ({ count }) => {
  return (
    <div className={style.container}>
      <h3 className={style.container__title}>Your Basket</h3>
      <div className={style.container__count}>
        <ShoppingBasketIcon className={style.container__count__icon} />
        <div className={style.container__count__number}>{count | 0} items</div>
      </div>
      <hr />
      <div className={style.container__contents}>
        <BasketCard />
        <BasketCard />
        <BasketCard />
        <BasketCard />
      </div>
    </div>
  );
};

export default BasketPage;
