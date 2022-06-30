import HomeFeature from "../features/Home/HomeContainer";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = ({ datas }) => {
  // console.log(datas["-N5pbMXnz6Iy-hbI8aKA"].restaurants);

  return (
    <div>
      <HomeFeature />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  // const { locale } = context;
  const datas = await axios.get(
    "https://foody-delivery-admin-default-rtdb.firebaseio.com/restaurants.json"
  );

  let languages = {
    ...(await serverSideTranslations(locale, ["menu", "common"])),
  };

  return {
    props: { datas: datas.data, ...languages }, // will be passed to the page component as props
  };
}

export default Home;
