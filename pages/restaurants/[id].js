import React from "react";
import Head from "next/head";
import RestaurantContainer from "../../features/Restaurants/Restaurant/RestaurantContainer";
import { restaurants } from "../../features/Restaurants/mock";

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

export async function getServerSideProps({ query }) {
  const id = query.id.slice(1) - 1;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${query.id}`
  );
  const data = await res.json();

  return {
    props: {
      restaurant: restaurants[id],
    },
  };
}

export default Restaurant;
