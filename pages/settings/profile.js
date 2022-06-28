import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayouts/SettingsLayouts';
import ProfileForm from '../../features/Settings/Profile/Profile';

import style from '../../styles/pages/profile/profile.module.scss';

export default function Profile() {
  return (
    <div className={style.container}>
      <ProfileForm />
    </div>
  );
}

Profile.getLayout = () => {
  return (
    <Layout>
      <NestedLayout>{<Profile />}</NestedLayout>
    </Layout>
  );
};

