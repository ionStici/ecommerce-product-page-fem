import React from "react";
import styles from "./../styles/nav.module.scss";

import logo from "./../images/logo.svg";
import userPhoto from "./../images/image-avatar.png";
import iconClose from "./../images/icon-close.svg";
import iconHamb from "./../images/icon-menu.svg";
import iconCart from "./../images/icon-cart.svg";

const Nav = function () {
  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.btn_toggle_nav}
          aria-label="Open Navigation Bar"
        >
          <img src={iconHamb} alt="" />
        </button>

        <a className={styles.btn_logo} href=".">
          <img src={logo} alt="Sneakers Logo" />
        </a>

        <nav className={styles.nav}>
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

        <div className={styles.right_corner_box}>
          <button className={styles.btn_cart} aria-label="Open Cart">
            <img src={iconCart} alt="" />
          </button>

          <button className={styles.btn_user_photo} aria-label="Profile">
            <img src={userPhoto} alt="" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
