import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Links />
    </div>
  );
};

export default Header;
