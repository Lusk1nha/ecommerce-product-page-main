import menuOpenIcon from '../../assets/images/icon-menu.svg';
import menuCloseIcon from '../../assets/images/icon-close.svg';

interface MenuIconType {
  isActive: boolean;
}

export function MenuIcon(props: MenuIconType) {
  const {isActive} = props

  return (
    <img className="menu-icon-image" alt="Menu icon" src={isActive ? menuCloseIcon : menuOpenIcon} />
  )
}