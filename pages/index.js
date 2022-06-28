import HomeFeature from "../features/Home/HomeContainer";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = ({ datas }) => {
  const router = useRouter();

  const { t } = useTranslation("common");



  return (
    <div>
      <HomeFeature />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  // const { locale } = context;
  const datas = await axios.get(
    "https://foody-delivery-admin-default-rtdb.firebaseio.com/res.json/"
  );

  let languages = {
    ...(await serverSideTranslations(locale, ["menu", "common"])),
  };

  return {
    props: { datas: datas.data, ...languages }, // will be passed to the page component as props
  };
}

export default Home;
