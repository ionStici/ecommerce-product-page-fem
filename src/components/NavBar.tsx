import React from "react";
import styles from "./../styles/navbar.module.scss";
import logo from "./../images/logo.svg";
import userPhoto from "./../images/image-avatar.png";
import iconClose from "./../images/icon-close.svg";
import iconHamb from "./../images/icon-menu.svg";
import iconCart from "./../images/icon-cart.svg";

const NavBar = function () {
  const [navStatus, setNavStatus] = React.useState(false);
  const toggleNavbar = ({ target }) => {
    const icon = target.querySelector("img");
    const nav = target.closest("header").querySelector(`.${styles.nav}`);

    if (!navStatus) {
      icon.src = iconClose;
      nav.classList.add(styles.open);
      setNavStatus(true);
      return;
    }

    if (navStatus) {
      icon.src = iconHamb;
      nav.classList.remove(styles.open);
      setNavStatus(false);
      return;
    }
  };

  return (
    <header className={styles.header}>
      <button
        onClick={toggleNavbar}
        className={styles.btn_toggle_navbar}
        aria-label="Open Navigation Bar"
      >
        <img src={iconHamb} alt="" />
      </button>

      <img src={logo} alt="Sneakers Logo" />

      <nav className={`${styles.nav}`}>
        <ul>
          <li>
            <a href=".">Collections</a>
          </li>
          <li>
            <a href=".">Men</a>
          </li>
          <li>
            <a href=".">Women</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <li>
            <a href=".">Contact</a>
          </li>
        </ul>
      </nav>

      <div className={styles.right_box}>
        <button className={styles.btn_cart} aria-label="Open Cart">
          <img src={iconCart} alt="" />
        </button>

        <button className={styles.btn_avatar} aria-label="Profile">
          <img src={userPhoto} alt="User Photo" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
