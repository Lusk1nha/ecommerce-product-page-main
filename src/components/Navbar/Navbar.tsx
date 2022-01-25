import companyLogo from '../../assets/images/logo.svg';
import userIcon from '../../assets/images/image-avatar.png';

import { Menu } from "./Menu"
import { Cart } from './Cart';

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import '../../styles/Navbar.scss';

export function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <nav className="navbar-container">
      <section className="menu-logo">
        <Menu />
        <img className="logo" alt="Company logo" src={companyLogo} />
      </section>

      <section className="menu-user">
        <Cart />
        <img className="user-avatar" alt="User avatar" src={userIcon} />
      </section>
    </nav>
  )
}