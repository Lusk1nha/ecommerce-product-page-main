import { useState } from "react"
import { MenuIcon } from "./MenuIcon"

export function Menu() {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => setActive(!active)

  return (
    <section className={active ? 'menu-container active' : 'menu-container'}>
      <div onClick={handleClick}>
        <MenuIcon isActive={active} />
      </div>

      <div className="menu-button-container">
        <a className="menu-button">Collections</a>
        <a className="menu-button">Men</a>
        <a className="menu-button">Women</a>
        <a className="menu-button">About</a>
        <a className="menu-button">Contact</a>
      </div>
    </section>
  )
}