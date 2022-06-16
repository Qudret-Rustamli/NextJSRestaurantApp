import { Rating } from "@mui/material";
import style from "./Card.module.scss";

const Card = ({ title, price, img }) => {
  return (
    <div className={style.container}>
      <div className={style.container__img}>
        <img src={img} alt="" />
      </div>
      <div className={style.container__info}>
        <h3 className={style.container__info__title}>{title || "title"}</h3>
        <div className={style.container__info__rating}>
          <Rating />
        </div>
        <div className={style.container__info__price}>$ {price || `$10`}</div>
      </div>
    </div>
  );
};

export default Card;
