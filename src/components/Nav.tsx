import React from "react";
import styles from "./../styles/nav.module.scss";

import logo from "./../images/logo.svg";
import userPhoto from "./../images/image-avatar.png";
import iconClose from "./../images/icon-close.svg";
import iconHamb from "./../images/icon-menu.svg";
import iconCart from "./../images/icon-cart.svg";

const Nav = function () {
  const [navCon, setNavCon] = React.useState(false);
  const toggleBtn = React.useRef(null);
  const toggleNav = function ({ target }) {
    const node = target.nodeName;
    if (node === "UL" || node === "LI" || node === "A") return;

    const btn = toggleBtn.current;
    const icon = btn.querySelector("img");
    const header = btn.closest("header");

    if (!navCon) {
      icon.src = iconClose;
      header.classList.add(styles.open);

      setNavCon(true);
      return;
    }

    if (navCon) {
      icon.src = iconHamb;
      header.classList.remove(styles.open);

      setNavCon(false);
      return;
    }
  };

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.btn_toggle_nav}
          aria-label="Open Navigation Bar"
          onClick={toggleNav}
          ref={toggleBtn}
        >
          <img src={iconHamb} alt="" />
        </button>

        <a className={styles.btn_logo} href=".">
          <img src={logo} alt="Sneakers Logo" />
        </a>

        <nav className={styles.nav} onClick={toggleNav}>
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
            {/* <p>3</p> */}
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
