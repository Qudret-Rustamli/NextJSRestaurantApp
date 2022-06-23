import Layout from "../../components/Layout";
import NestedLayout from "../../components/NestedLayouts/SettingsLayouts";
import BasketContainer from "../../features/Settings/Basket";
import Head from "next/head";

export default function Basket() {
  return <BasketContainer />;
}

Basket.getLayout = () => {
  return (
    <>
      <Head>
        <title> Restaurants | Foody Delivery</title>
      </Head>
      <Layout>
        <NestedLayout>{<Basket />}</NestedLayout>
      </Layout>
    </>
  );
};
