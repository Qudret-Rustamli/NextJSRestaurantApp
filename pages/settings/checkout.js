import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayouts/SettingsLayouts';

import style from '../../styles/pages/profile/checkout.module.scss';

export default function Checkout() {
  return <div className={style.container}>Checkout</div>;
}

Checkout.getLayout = () => {
  return (
    <Layout>
      <NestedLayout>{<Checkout />}</NestedLayout>
    </Layout>
  );
};
