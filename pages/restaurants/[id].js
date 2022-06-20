import React from "react";
import Head from "next/head";
import RestaurantContainer from "../../features/Restaurant/RestaurantContainer";

const Restaurant = () => {
  return (
    <>
      <Head>
        <title> Restaurant | Foody Delivery</title>
      </Head>
      <RestaurantContainer />
    </>
  );
};

export default Restaurant;
