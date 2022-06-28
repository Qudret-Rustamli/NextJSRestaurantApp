import React from "react";
import Head from "next/head";
import RestaurantContainer from "../../features/Restaurants/Restaurant/RestaurantContainer";
import { restaurants } from "../../data-dev/mock";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Restaurant = ({ restaurant }) => {
  return (
    <>
      <Head>
        <title> Restaurant | Foody Delivery</title>
      </Head>
      <RestaurantContainer restaurant={restaurant} />
    </>
  );
};

export async function getServerSideProps({ query, locale }) {
  const id = query.id.slice(1) - 1;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${query.id}`
  );
  const data = await res.json();

  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  return {
    props: {
      restaurant: restaurants[id],
      ...languages,
    },
  };
}

export default Restaurant;
