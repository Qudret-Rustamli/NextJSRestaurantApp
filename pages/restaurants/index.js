import RestaurantContainer from "../../features/Restaurants/RestaurantsContainer";
import Head from "next/head";
import { restaurants } from "../../data-dev/mock";

const Restaurants = ({ restaurants }) => {
  console.log("restaurants", restaurants);

  return (
    <>
      <Head>
        <title> Restaurants | Foody Delivery</title>
      </Head>
      <RestaurantContainer restaurants={restaurants} />
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
  return { props: { restaurants } };
}

export default Restaurants;
