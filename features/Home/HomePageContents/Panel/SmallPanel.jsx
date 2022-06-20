import style from './style.module.scss';

const SmallPanel = () => {
  return (
    <div className={style.smallPanelContainer}>
      <div className={style.smallPanelContainer__panelImg}>
        <img src="https://food-delivery-chi.vercel.app/image/menu.png" />
      </div>
    </div>
  );
};

export default SmallPanel;
