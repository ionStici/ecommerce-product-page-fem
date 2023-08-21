import React from "react";
import styles from "./../styles/nav.module.scss";

import logo from "./../images/logo.svg";
import userPhoto from "./../images/image-avatar.png";
import iconClose from "./../images/icon-close.svg";
import iconHamb from "./../images/icon-menu.svg";
import iconCart from "./../images/icon-cart.svg";

const icon_cart = (
  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
      fill="#69707D"
      fillRule="nonzero"
    />
  </svg>
);

const Nav = function (props) {
  const [navCon, setNavCon] = React.useState(false);
  const [cartCon, setCartCon] = React.useState(false);

  const toggleBtn = React.useRef(null);
  const cart = React.useRef(null);

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

  const toggleCart = function (e) {
    if (!cartCon) {
      cart.current.classList.add(styles.display_cart);
      setCartCon(true);
      return;
    }

    if (cartCon) {
      cart.current.classList.remove(styles.display_cart);
      setCartCon(false);
      return;
    }
  };

  console.log(props.count);

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
          <button
            className={styles.btn_cart}
            aria-label="Open Cart"
            onClick={toggleCart}
          >
            {icon_cart}
            <p>3</p>
          </button>

          <section className={styles.cart_box} ref={cart}>
            <p className={styles.cart_title}>Cart</p>
            <p className={styles.cart_empty}>Your cart is empty</p>
          </section>

          <button className={styles.btn_user_photo} aria-label="Profile">
            <img src={userPhoto} alt="User Photo" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
