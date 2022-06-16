import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

//next/Link
import Link from 'next/link';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <Link href="/settings/profile">
          <MenuItem>
            <PeopleIcon /> Profile
          </MenuItem>
        </Link>
        <Link href="/settings/basket">
          <MenuItem>
            <ShoppingBasketIcon /> Your Basket
          </MenuItem>
        </Link>
        <Link href="/settings/order">
          <MenuItem>
              <FilterFramesIcon fontSize="small" />
            Your Orders
          </MenuItem>
        </Link>
       <Link href="/settings/checkout">
       <MenuItem>
            <PointOfSaleIcon fontSize="small" />
          Checkout
        </MenuItem>
       </Link>
        <MenuItem>
            <Logout fontSize="small" />
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
