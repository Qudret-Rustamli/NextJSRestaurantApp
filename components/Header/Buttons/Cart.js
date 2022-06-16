import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../Header.module.scss";
import { styled } from "@material-ui/core";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "#f05159",
    color: "#fff",
    right: -2,
    top: 2,
  },
});

const Cart = () => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="primary" className={styles.badge}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default Cart;
