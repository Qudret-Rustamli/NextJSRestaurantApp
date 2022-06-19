import style from './style.module.scss';

const SmallCard = (/* { img, title } */) => {
  return (
    <div className={style.SmallContainer}>
      <div className={style.SmallContainer__img}>
        <img src={ "https://food-delivery-chi.vercel.app/image/fries.png"} alt="" />
      </div>
      <div className={style.SmallContainer__text}>{'SALAM'}</div>
    </div>
  );
};

export default SmallCard;
