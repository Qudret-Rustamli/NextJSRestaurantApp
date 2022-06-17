import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import LoginForm from './Login';
import LogoutForm from './Logout';

const LoginFeature = () => {
  const [form, setForm] = React.useState(<LoginForm />);

  return (
    <div className={style.container}>
      <div className={style.container__links}>
        <Link href="login">
          <a onClick={() => setForm(<LoginForm />)} className={style.container__links__link}>
            Login
          </a>
        </Link>
        <Link href="login">
          <a onClick={() => setForm(<LogoutForm />)} className={style.container__links__link}>
            Signup
          </a>
        </Link>
      </div>
      <div className={style.container__forms}>{form}</div>
    </div>
  );
};

export default LoginFeature;
