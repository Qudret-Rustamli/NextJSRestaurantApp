import React from 'react';
import BasketButton from '../../UI/Button/BasketButton/BasketButton';
import style from './style.module.scss';

const BasketCard = ({ img, title, price, actions }) => {
  return (
    <div className={style.container}>
      <div className={style.container__image}>
        <img src="https://etopizza.ru/wp-content/uploads/2021/05/301_1-1.jpg" alt="product" />
      </div>
      <div className={style.content}>
        <div className={style.content__title}>{title || 'Product'}</div>
        <div className={style.content__price}>$ {price || 10}</div>
      </div>
      <div className={style.container__actions}>
        <BasketButton />
      </div>
    </div>
  );
};

export default BasketCard;
