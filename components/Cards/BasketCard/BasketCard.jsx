import React from 'react';
import BasketButton from '../../UI/Button/BasketButton/BasketButton';
import style from './style.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeBasket } from '../../../Redux/BasketSlice';

const BasketCard = ({ item }) => {
  console.log('first item', item.id);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBasket(id));
  };

  return (
    <>
      <hr />
      <div className={style.container}>
        <div className={style.container__delete}>
          <IconButton onClick={() => handleRemove(item.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={style.container__left}>
          <div className={style.container__left__image}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={style.container__left__content}>
            <div className={style.container__left__content__title}>{item.title || 'Product'}</div>
            <div className={style.container__left__content__price}>$ {item.price || 0}</div>
          </div>
        </div>

        <div className={style.container__right}>
          <BasketButton item={item} />
        </div>
      </div>
    </>
  );
};

export default BasketCard;
