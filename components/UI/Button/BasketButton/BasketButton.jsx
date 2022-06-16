import { IconButton } from '@mui/material';
import React from 'react';
import style from './style.module.scss';

const BasketButton = () => {
  return (
    <div className={style.container}>
      <div className={style.container__iconPlus}>
        <IconButton>+</IconButton>
      </div>
      <div className={style.container__count}>9</div>
      <div className={style.container__iconMinus}>
        <IconButton>-</IconButton>
      </div>
    </div>
  );
};

export default BasketButton;
