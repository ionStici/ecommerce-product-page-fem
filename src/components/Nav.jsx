import React from 'react';
import styles from './../styles/nav.module.scss';
import logo from './../images/logo.svg';
import userPhoto from './../images/image-avatar.png';
import iconClose from './../images/icon-close.svg';
import iconHamb from './../images/icon-menu.svg';

const icon_cart = (
    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fillRule="nonzero"
        />
    </svg>
);

const icon_delete = (
    <svg
        width="14"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
            />
        </defs>
        <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
    </svg>
);

function Nav({ count, addToCart, product }) {
    const [navCon, setNavCon] = React.useState(false);
    const [cartCon, setCartCon] = React.useState(false);

    const navToggleBtn = React.useRef(null);
    const cartContainer = React.useRef(null);

    const prod = product;
    const qty = count;
    const newPrice = '$' + (+prod.price.slice(1) * qty + '.00');

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

    const emptyCart = () => addToCart(0);

    const logoRef = React.useRef(null);
    const rightBox = React.useRef(null);

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
