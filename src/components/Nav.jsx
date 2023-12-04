import React from 'react';
import styles from './../styles/nav.module.scss';
import logo from './../images/logo.svg';
import userPhoto from './../images/image-avatar.png';
import iconClose from './../images/icon-close.svg';
import iconHamb from './../images/icon-menu.svg';
import { icon_cart } from '../data/icons';
import { icon_delete } from '../data/icons';

function Nav({ count, addToCart, product }) {
    const [navCon, setNavCon] = React.useState(false);
    const [cartCon, setCartCon] = React.useState(false);

    const logoRef = React.useRef(null);
    const rightBox = React.useRef(null);

    const navToggleBtn = React.useRef(null);
    const cartContainer = React.useRef(null);

    const prod = product;
    const qty = count;
    const newPrice = '$' + (+prod.price.slice(1) * qty + '.00');
    const emptyCart = () => addToCart(0);

    const toggleNav = function ({ target }) {
        const node = target.nodeName;
        if (node === 'UL' || node === 'LI' || node === 'A') return;

        const btn = navToggleBtn.current;
        const icon = btn.querySelector('img');
        const header = btn.closest('header');

        if (!navCon) {
            icon.src = iconClose;
            header.classList.add(styles.open);
            updateInert(true);
            setNavCon(true);
            return;
        }

        if (navCon) {
            icon.src = iconHamb;
            header.classList.remove(styles.open);
            updateInert(false);
            setNavCon(false);
            return;
        }
    };

    const toggleCart = e => {
        const cart = cartContainer.current;

        if (!cartCon) {
            cart.classList.add(styles.display_cart);
            setCartCon(true);
            return;
        }

        if (cartCon) {
            cart.classList.remove(styles.display_cart);
            setCartCon(false);
            return;
        }
    };

    const updateInert = con => {
        if (con && logoRef.current !== null && rightBox.current !== null) {
            logoRef.current.setAttribute('inert', 'true');
            rightBox.current.setAttribute('inert', 'true');
            return;
        }

        if (!con && logoRef.current !== null && rightBox.current !== null) {
            logoRef.current.removeAttribute('inert');
            rightBox.current.removeAttribute('inert');
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
                    ref={navToggleBtn}
                >
                    <img src={iconHamb} alt="" />
                </button>

                <a className={styles.btn_logo} href="." ref={logoRef}>
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

                <div className={styles.right_corner_box} ref={rightBox}>
                    <button
                        // prettier-ignore
                        className={`${styles.btn_cart} ${cartCon ? styles.cart_icon_black : ""}`}
                        aria-label="Open Cart"
                        onClick={toggleCart}
                    >
                        {icon_cart}
                        {qty > 0 ? <p>{qty}</p> : ''}
                    </button>

                    <section className={styles.cart_box} ref={cartContainer}>
                        <p className={styles.cart_header}>Cart</p>

                        {qty < 1 ? (
                            <p className={styles.cart_empty_text}>
                                Your cart is empty
                            </p>
                        ) : (
                            <div className={styles.cart_product_wrapper}>
                                <div className={styles.cart_product_box}>
                                    <img
                                        src={prod.prodCover}
                                        className={styles.cart_product_img}
                                        alt={prod.title}
                                    />

                                    <div className={styles.cart_text_box}>
                                        <p
                                            className={
                                                styles.cart_product_title
                                            }
                                        >
                                            {prod.title}
                                        </p>
                                        <p
                                            className={
                                                styles.cart_product_price
                                            }
                                        >
                                            {prod.price} x {qty}{' '}
                                            <span>{newPrice}</span>
                                        </p>
                                    </div>

                                    <button
                                        className={styles.cart_btn_delete}
                                        onClick={emptyCart}
                                    >
                                        {icon_delete}
                                    </button>
                                </div>

                                <button className={styles.cart_btn_checkout}>
                                    Checkout
                                </button>
                            </div>
                        )}
                    </section>

                    <button
                        className={styles.btn_user_photo}
                        aria-label="Profile"
                    >
                        <img src={userPhoto} alt="User Photo" />
                    </button>
                </div>
            </header>
        </>
    );
}

export default Nav;
