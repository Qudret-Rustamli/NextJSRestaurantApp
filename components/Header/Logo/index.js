import Link from 'next/link';
import React from 'react';
import style from './logo.module.scss';

const Logo = () => {
  return (
    <Link href="/">
      <div className={style.cont}>
        <span>Logo</span>
        <span>.</span>
      </div>
    </Link>
  );
};

export default Logo;
