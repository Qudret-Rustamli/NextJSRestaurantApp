//style
import style from './style.module.scss';

//next/link
import Link from 'next/link';

const ItemSidebar = ({ icon, title, link }) => {
  return (
    <Link href={link}>
      <div className={style.SidebarItemContainer}>
        <div className={style.SidebarItemIcon}>{icon}</div>
        <div className={style.SidebarItemText}>{title}</div>
      </div>
    </Link>
  );
};

export default ItemSidebar;
