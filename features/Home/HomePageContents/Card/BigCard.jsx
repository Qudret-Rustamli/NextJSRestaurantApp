import style from './style.module.scss';

const BigCard = () => {
  return (
    <div className={style.bigCardContainer}>
      <div className={style.bigCardContainer__panelImg}>
        <img src="https://food-delivery-chi.vercel.app/image/info/1.png" />
      </div>
      <h2 className={style.bigCardContainer__title}>Discount Boucher</h2>
      <div className={style.bigCardContainer__content}>Lorem Ipsum Is Placeholder Commonly Used In The Graphic</div>
    </div>
  );
};

export default BigCard;
