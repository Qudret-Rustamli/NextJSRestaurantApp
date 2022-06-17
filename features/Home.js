import style from './style.module.scss';

const Home = () => {
  return (
    <div className={style.container}>
      {/* ====================================================================== */}
      <div className={style.container__mainContent}>
        <div className={style.container__mainContent__subLeft}>
          <div className={style.container__mainContent__subLeft__title}></div>
          <div className={style.container__mainContent__subLeft__content}></div>
          <div className={style.container__mainContent__subLeft__btns}>
            <button>First</button>
            <button>Second</button>
          </div>
        </div>
        <div className={style.container__mainContent__subRight}></div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__featureContent}>
        <div className={style.container__featureContent__title}></div>
        <div className={style.container__featureContent__content}></div>
        <div className={style.container__featureContent__cards}></div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__Content__first}>
        <div className={style.container__Content__first__left}>
          <div className={style.container__Content__first__left__title}></div>
          <div className={style.container__Content__first__left__content}></div>
        </div>
        <div className={style.container__Content__first__right}>Cards</div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__Content__second}>
        <div className={style.container__Content__second__left}>cards</div>
        <div className={style.container__Content__second__right}>
          <div className={style.container__Content__second__right__title}></div>
          <div className={style.container__Content__second__right__content}></div>
        </div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__Content__third}>
        <div className={style.container__Content__third__left}>
          <div className={style.container__Content__third__left__title}></div>
          <div className={style.container__Content__third__left__content}></div>
        </div>
        <div className={style.container__Content__third__right}></div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__newFoods}>
        <div className={style.container__newFoods__up}>
            <div className={style.container__newFoods__up__title}></div>
            <div className={style.container__newFoods__up__content}></div>
        </div>
        <div className={style.container__newFoods__down}>Cards</div>
      </div>
    </div>
  );
};

export default Home;
