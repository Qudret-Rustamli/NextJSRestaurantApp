import { Rating } from '@mui/material';
import style from './style.module.scss';

const Card = ({ title, price ,img}) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img
          src={img}
          alt=""
        />
      </div>
      <div className={style.infoContainer}>
        <h3 className={style.title}>{title || 'title'}</h3>
        <div className={style.rating}>
          <Rating />
        </div>
        <div className={style.price}>$ {price || `$10`}</div>
      </div>
    </div>
  );
};

export default Card;
