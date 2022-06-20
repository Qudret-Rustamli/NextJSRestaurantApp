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
      <Button width={115} backgroud="#d63626" borderRadius="10px" color="white">Sign up</Button>
      <Cart />
      <Profile />
    </div>
  );
};

export default Buttons;
