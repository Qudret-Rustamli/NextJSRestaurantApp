import React from 'react';
import style from './style.module.scss';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBasket, decrementBasket } from '../../../../Redux/BasketSlice';

const BasketButton = ({ item }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const handleIncrement = (product) => {
    dispatch(incrementBasket(product));
  };
  const handleDecrement = (product) => {
    dispatch(decrementBasket(product));
  };
  return (
    <Button
      className={style.container}
      variant="raised"
      sx={{
        '&.MuiButtonBase-root:hover': {
          bgcolor: 'white',
        },
      }}>
      <div onClick={() => handleIncrement(item)} className={style.container__iconPlus}>
        <div>+</div>
      </div>
      <div className={style.container__count}>{item.quantity}</div>
      <div onClick={() => handleDecrement(item)} className={style.container__iconMinus}>
        <div>-</div>
      </div>
    </Button>
  );
};

export default BasketButton;
