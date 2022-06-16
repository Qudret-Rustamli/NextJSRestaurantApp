//import icons
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Logout from '@mui/icons-material/Logout';
import ItemSidebar from './ItemSidebar';

//style
import style from './style.module.scss';

const SettingsSidebar = () => {
  return (
    <div className={style.container}>
      <ItemSidebar icon={<PeopleIcon />} title="Profile" link="/settings/profile" />
      <ItemSidebar icon={<ShoppingBasketIcon />} title="Your Basket" link="/settings/basket" />
      <ItemSidebar icon={<FilterFramesIcon />} title="Your Orders" link="/settings/order" />
      <ItemSidebar icon={<PointOfSaleIcon />} title="Checkout" link="/settings/checkout" />
      <ItemSidebar icon={<Logout />} title="Logout" link="/" />
    </div>
  );
};

export default SettingsSidebar;
