import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayouts/SettingsLayouts';
import BasketPage from '../../features/Settings/Basket/BasketPage';

export default function Basket() {
  return <BasketPage />;
}

Basket.getLayout = () => {
  return (
    <Layout>
      <NestedLayout>{<Basket />}</NestedLayout>
    </Layout>
  );
};
