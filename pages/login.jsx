import React from 'react';
import SecondLayout from '../components/Layout/SecondLayout';
import LoginLayout from '../components/NestedLayouts/LoginLayouts/LoginLayout';
import LoginFeature from '../features/Login';

const Login = () => {
  return (
    <div>
      <LoginFeature />
    </div>
  );
};

Login.getLayout = () => {
  return (
    <SecondLayout>
      <LoginLayout>{<Login />}</LoginLayout>
    </SecondLayout>
  );
};

export default Login;
