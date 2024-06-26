import Logo from './nav/Logo';
import Cart from './nav/Cart';
import NavLinks from './nav/NavLinks';
import Profile from './nav/Profile';
import Button from '../ui/Button';

import { useState } from 'react';
import styles from './../styles/nav.module.scss';
import { ReactSVG } from 'react-svg';
import { useProduct } from '../ProductContext';

const icon_cart = 'images/icon-cart.svg';
const iconClose = 'images/icon-close.svg';
const iconHamb = 'images/icon-menu.svg';

function Nav() {
  const { qty } = useProduct();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((nav) => !nav);
  const toggleCart = () => setIsCartOpen((cart) => !cart);

  return (
    <header className={`${styles.header} ${isNavOpen ? styles.open : ''}`}>
      <Button
        classes={styles.btn_toggle_nav}
        onClick={toggleNav}
        ariaLabel={isNavOpen ? 'Close' : 'Open'}
      >
        <img src={isNavOpen ? iconClose : iconHamb} alt="" />
      </Button>

      <Logo />
      <NavLinks isOpen={isNavOpen} toggleNav={toggleNav} />

      <div className={styles.right_corner_box}>
        <Button
          classes={`${styles.btn_cart} ${isCartOpen && styles.cart_black}`}
          onClick={toggleCart}
          ariaLabel="Open Cart"
        >
          <ReactSVG src={icon_cart} />
          {qty > 0 && <p>{qty}</p>}
        </Button>

        <Cart open={isCartOpen} />
        <Profile />
      </div>
    </header>
  );
}

export default Nav;
