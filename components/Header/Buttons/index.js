import React from "react";
import Button from "../../Button";
import Flags from "./Flags";
import Cart from "./Cart";
import Profile from "./Profile";
import styles from "../Header.module.scss";
import { useTranslation } from "react-i18next";

const Buttons = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.buttons}>
      <Flags />
      <Button width={115} backgroud="#d63626" borderRadius="10px" color="white">
        {t("sign_up")}
      </Button>
      <Cart />
      <Profile />
    </div>
  );
};

export default Buttons;
