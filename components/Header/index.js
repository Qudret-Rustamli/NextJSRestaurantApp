import React from 'react';
import Links from './Links';
import Logo from './Logo';
import styles from './Header.module.scss';
import Buttons from './Buttons';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Links />
      <Buttons />
    </div>
  );
};

export default Header;
