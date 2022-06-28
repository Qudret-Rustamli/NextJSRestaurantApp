import RestaurantContainer from "../../features/Restaurants/RestaurantsContainer";
import Head from "next/head";
import { restaurants } from "../../data-dev/mock";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Restaurants = ({ restaurants }) => {
  return (
    <>
      <Head>
        <title> Restaurants | Foody Delivery</title>
      </Head>
      <RestaurantContainer restaurants={restaurants} />
    </>
  );
};

export async function getServerSideProps({ query, locale }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${query.id}`
  );
  const data = await res.json();

  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  return { props: { restaurants, ...languages } };
}

export default Restaurants;
