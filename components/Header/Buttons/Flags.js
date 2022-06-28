import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Flags() {
  const [flag, setFlag] = useState("en");
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (flag) => {
    if (flag === "az" || flag === "en" || flag === "fr") {
      setFlag(flag);
    }

    setAnchorEl(null);
    router.push(router.route, router.asPath, {
      locale: flag,
    });
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={`/images/flag-${flag}.svg`} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose.bind(null, "en")}>
          <img src="/images/flag-en.svg" alt="english flag" />
        </MenuItem>
        <MenuItem onClick={handleClose.bind(null, "az")}>
          <img src="/images/flag-az.svg" alt="azerbaijan flag" />
        </MenuItem>
        <MenuItem onClick={handleClose.bind(null, "fr")}>
          <img src="/images/flag-fr.svg" alt="french flag" />
        </MenuItem>
      </Menu>
    </div>
  );
}
