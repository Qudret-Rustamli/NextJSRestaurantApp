import React from "react";
import style from "./style.module.scss";
import { Button } from "@mui/material";

const BasketButton = () => {
  return (
    <Button
      className={style.container}
      variant="raised"
      sx={{
        "&.MuiButtonBase-root:hover": {
          bgcolor: "white",
        },
      }}
    >
      <div className={style.container__iconPlus}>
        <div>+</div>
      </div>
      <div className={style.container__count}>9</div>
      <div className={style.container__iconMinus}>
        <div>-</div>
      </div>
    </Button>
  );
};

export default BasketButton;
