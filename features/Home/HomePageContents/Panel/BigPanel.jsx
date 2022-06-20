import SmallCard from '../Card/SmallCard';
import style from './style.module.scss';

const BigPanel = () => {
  return (
    <div className={style.bigPanelContainer}>
      <div className={style.bigPanelContainer__bigPanelImg}>
        <img src="https://food-delivery-chi.vercel.app/image/sendvic.png" alt="" />
      </div>
      <div className={style.bigPanelContainer__cards}>
        <div className={style.bigPanelContainer__cards__card1}>
            <SmallCard />
        </div>
        <div className={style.bigPanelContainer__cards__card2}>
            <SmallCard />
        </div>
        <div className={style.bigPanelContainer__cards__card3}>
            <SmallCard />
        </div>
      </div>
    </div>
  );
};

export default BigPanel;
