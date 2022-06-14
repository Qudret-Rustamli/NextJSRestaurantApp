import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayouts/SettingsLayouts';

export default function Basket() {
  return <div>Basket</div>;
}

Basket.getLayout = () => {
  return (
    <Layout>
      <NestedLayout>{<Basket />}</NestedLayout>
    </Layout>
  );
};
