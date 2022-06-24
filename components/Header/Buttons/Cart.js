import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '../Header.module.scss';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import BasketCard from '../../Cards/BasketCard/BasketCard';
import { useSelector } from 'react-redux';
import { styled } from '@material-ui/core';
import Link from 'next/link';

const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    backgroundColor: '#f05159',
    color: '#fff',
    right: -2,
    top: 2,
  },
});

const Cart = () => {
  const basket = useSelector((state) => state.basket.basket);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const totalPrice = basket.reduce((total, item) => total + item.price * item.quantity, 0);
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
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={basket.length} color="primary" className={styles.badge}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflowY: 'auto',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: '700px',
            padding: '1rem',
            maxHeight: '300px',
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
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Link href="/settings/basket">
            <a>Go to basket page</a>
          </Link>
          <div style={{fontSize:"1rem",color:"red",fontWeight:"500"}}>
            {`Total price: ${totalPrice} $`}
          </div>
        </div>

        {basket.length >= 1 ? (
          basket.map((item) => (
            <div key={item.id}>
              <BasketCard item={item} />
            </div>
          ))
        ) : (
          <div>Basket is empty</div>
        )}
      </Menu>
    </React.Fragment>
  );
};

export default Cart;
