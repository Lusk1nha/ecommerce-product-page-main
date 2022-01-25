import { useState } from 'react';
import cartIcon from '../../assets/images/icon-cart.svg';


export function Cart() {
  const [active, setActive] = useState<boolean>(false)
  
  const handleClick = () => setActive(!active)

  return (
    <section className={active ? "cart-container active" : "cart-container"}>
      <img onClick={handleClick} 
      className="cart-icon" 
      alt="Cart icon" src={cartIcon} />

      <div className="cart-content">
        <h1>Cart</h1>

        <div className="items-in-cart"></div>
      </div>
    </section>
  );
}