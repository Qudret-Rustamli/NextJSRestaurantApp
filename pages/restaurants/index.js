import RestaurantContainer from "../../features/Restaurants/RestaurantsContainer";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchRestaurantsData } from "../../redux/RestaurantsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Restaurants = ({ restaurants }) => {
  const dispatch = useDispatch();
  const datas = restaurants["-N5pbMXnz6Iy-hbI8aKA"].restaurants;

  useEffect(() => {
    dispatch(fetchRestaurantsData(datas));
  }, [datas]);

  return (
    <>
      <Head>
        <title> Restaurants | Foody Delivery</title>
      </Head>
      <RestaurantContainer restaurants={datas} />
    </>
  );
};

export async function getServerSideProps({ query, locale }) {
  const res = await fetch(
    `https://foody-delivery-admin-default-rtdb.firebaseio.com/restaurants.json`
  );
  const restaurants = await res.json();
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };
  return { props: { restaurants, ...languages } };
}

export default Restaurants;
