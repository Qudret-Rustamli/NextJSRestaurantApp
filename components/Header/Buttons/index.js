import React from "react";
import Button from "../../Button";
import Flags from "./Flags";
import Cart from "./Cart";
import Profile from "./Profile";
import styles from "../Header.module.scss";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Flags />
      <Button width={100}>Sign up</Button>
      <Cart />
      <Profile />
    </div>
  );
};

export default Buttons;
