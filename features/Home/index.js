import Button from "../../components/Button";
import BigCard from "./HomePageContents/Card/BigCard";
import BigPanel from "./HomePageContents/Panel/BigPanel";
import SmallPanel from "./HomePageContents/Panel/SmallPanel";
import style from "../../styles/pages/home.module.scss";

//icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { MdOutgoingMail, MdLocationPin } from "react-icons/md";

const HomeFeature = () => {
  return (
    <div className={style.container}>
      {/* ====================================================================== */}
      <div className={style.container__mainContent}>
        <div className={style.container__mainContent__subLeft}>
          <div className={style.container__mainContent__subLeft__title}>
            Our Food Site Makes It Easy To Find Local Food
          </div>
          <div className={style.container__mainContent__subLeft__content}>
            Lorem Ipsum Is Placeholder Text Commonly Used In The Graphic, Print,
            And Publishing Industries For Previewing Layouts And Visual Mockups.
          </div>
          <div className={style.container__mainContent__subLeft__btns}>
            <Button
              width="35%"
              height="4.3rem"
              borderRadius="2rem"
              color="white"
              backgroud="#d63626"
            >
              Sign Up
            </Button>
            <Button
              width="35%"
              height="4.3rem"
              borderRadius="2rem"
              color="black"
              border="1px solid black"
            >
              Order Now
            </Button>
          </div>
        </div>
        <div className={style.container__mainContent__subRight}>
          <BigPanel />
          <div
            className={style.container__mainContent__subRight__wrapper}
          ></div>
        </div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__featureContent}>
        <div className={style.container__featureContent__title}>Features</div>
        <div className={style.container__featureContent__content}>
          Lorem Ipsum Is Placeholder Commonly Used In The Graphic
        </div>
        <div className={style.container__featureContent__cards}>
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__Content__first}>
        <div className={style.container__Content__first__left}>
          <h1 className={style.container__Content__first__left__title}>
            Menu That Always Make You Fall In Love
          </h1>
          <div className={style.container__Content__first__left__content}>
            Lorem Ipsum Is Placeholder Text Commonly Used In The Graphic, Print,
            And Publishing Industries For Previewing Layouts And Visual
            Mockups.Lorem Ipsum Is Placeholder Text Commonly Used In The
            Graphic, Print, And Publishing Industries For Previewing Layouts And
            Visual Mockups.
          </div>
        </div>
        <div className={style.container__Content__first__right}>
          <SmallPanel />
        </div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__Content__second}>
        <div className={style.container__Content__second__left}>
          <SmallPanel />
        </div>
        <div className={style.container__Content__second__right}>
          <div className={style.container__Content__second__right__title}>
            Yummy Always Papa John’s Pizza.Agree?
          </div>
          <div className={style.container__Content__second__right__content}>
            Lorem Ipsum Is Placeholder Text Commonly Used In The Graphic, Print,
            And Publishing Industries For Previewing Layouts And Visual
            Mockups.Lorem Ipsum Is Placeholder Text Commonly Used In The
            Graphic, Print, And Publishing Industries For Previewing Layouts And
            Visual Mockups.
          </div>
        </div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__Content__third}>
        <div className={style.container__Content__third__left}>
          <div className={style.container__Content__third__left__title}>
            Do You Like French Fries? Mmm...
          </div>
          <div className={style.container__Content__third__left__content}>
            Lorem Ipsum Is Placeholder Text Commonly Used In The Graphic, Print,
            And Publishing Industries For Previewing Layouts And Visual
            Mockups.Lorem Ipsum Is Placeholder Text Commonly Used In The
            Graphic, Print, And Publishing Industries For Previewing Layouts And
            Visual Mockups.
          </div>
        </div>
        <div className={style.container__Content__third__right}>
          <SmallPanel />
        </div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__newFoods}>
        <div className={style.container__newFoods__title}>
          Our Popular Update New Foods
        </div>
        <div className={style.container__newFoods__content}>
          Lorem Ipsum Is Placeholder Commonly Used In The Graphic
        </div>
        <div className={style.container__newFoods__down}>
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>
      {/* ====================================================================== */}
      <div className={style.container__footer}>
        <h1 className={style.container__footer__title}>
          Our Sosial Media Accounts
        </h1>
        <div className={style.container__footer__icons}>
          <FaFacebook />
          <FaInstagram />
          <FaTwitterSquare />
          <FaYoutube />
          <FaLinkedin />
          <FaTiktok />
          <MdOutgoingMail />
          <MdLocationPin />
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
