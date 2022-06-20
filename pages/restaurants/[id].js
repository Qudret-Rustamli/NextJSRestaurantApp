import React from "react";
import Head from "next/head";
import RestaurantContainer from "../../features/Restaurant/RestaurantContainer";

const Restaurant = (props) => {
  return (
    <>
      <Head>
        <title> Restaurant | Foody Delivery</title>
      </Head>
      <RestaurantContainer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${query.id}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Restaurant;
