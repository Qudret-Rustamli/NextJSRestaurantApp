import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayouts/SettingsLayouts';

import style from '../../styles/pages/profile/order.module.scss';


export default function Order() {
  return <div className={style.container} >Order</div>;
}

Order.getLayout = () => {
  return (
    <Layout>
      <NestedLayout>{<Order/>}</NestedLayout>
    </Layout>
  );
};
