import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayouts/SettingsLayouts';

import style from '../../styles/pages/profile/profile.module.scss';

export default function Profile() {
  return <div className={style.container}>Profile</div>;
}

Profile.getLayout = () => {
  return (
    <Layout>
      <NestedLayout>{<Profile/>}</NestedLayout>
    </Layout>
  );
};
