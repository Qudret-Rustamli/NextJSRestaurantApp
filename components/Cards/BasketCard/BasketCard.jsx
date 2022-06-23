import React from "react";
import BasketButton from "../../UI/Button/BasketButton/BasketButton";
import style from "./style.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const BasketCard = ({ img, title, price }) => {
  const data = useSelector((state) => state.basket);
  console.log("basket", data.basket);

  return (
    <>
      <hr />
      <div className={style.container}>
        <div className={style.container__delete}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={style.container__left}>
          <div className={style.container__left__image}>
            <img
              src="https://etopizza.ru/wp-content/uploads/2021/05/301_1-1.jpg"
              alt="product"
            />
          </div>
          <div className={style.container__left__content}>
            <div className={style.container__left__content__title}>
              {title || "Product"}
            </div>
            <div className={style.container__left__content__price}>
              $ {price || 10}
            </div>
          </div>
        </div>

        <div className={style.container__right}>
          <BasketButton />
        </div>
      </div>
    </>
  );
};

export default BasketCard;
