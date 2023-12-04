import React from 'react';
import styles from './../styles/product.module.scss';
import { iconMinus, iconPlus, iconCart } from '../data/icons';

const Product = function (props) {
    const [count, setCount] = React.useState(0);
    const num = React.useRef(null);
    const mainSection = React.useRef(null);

    const icons = { minus: iconMinus, plus: iconPlus, cart: iconCart };
    const product = props.product;
    const addToCart = () => props.addToCart(count);

    const updateQuantity = function ({ target }) {
        if (target.nodeName !== 'BUTTON') return;
        if (count <= 0 && target.dataset.btn === 'minus') return;
        if (count >= 25 && target.dataset.btn === 'plus') return;
        const numEl = num.current;

        if (target.dataset.btn === 'minus') {
            numEl.classList.add(styles.an_m1);
            setTimeout(() => numEl.classList.add(styles.an_m2), 200);

            setTimeout(() => {
                setCount(prev => prev - 1);
                numEl.classList.add(styles.an_m3);

                setTimeout(() => {
                    numEl.classList.remove(styles.an_m1);
                    numEl.classList.remove(styles.an_m2);
                    numEl.classList.remove(styles.an_m3);
                }, 250);
            }, 220);
        }

        if (target.dataset.btn === 'plus') {
            numEl.classList.add(styles.an_p1);
            setTimeout(() => numEl.classList.add(styles.an_p2), 200);

            setTimeout(() => {
                setCount(prev => prev + 1);
                numEl.classList.add(styles.an_p3);

                setTimeout(() => {
                    numEl.classList.remove(styles.an_p1);
                    numEl.classList.remove(styles.an_p2);
                    numEl.classList.remove(styles.an_p3);
                }, 250);
            }, 220);
        }
    };

    return (
        <>
            <section className={styles.section} ref={mainSection}>
                <div className={styles.wrapper}>
                    <div className={styles.box_text}>
                        <p className={styles.label}>{product.label}</p>
                        <h1 className={styles.title}>{product.title}</h1>
                        <p className={styles.text}>{product.description}</p>
                    </div>

                    <div className={styles.box_price}>
                        <p>
                            <span className={styles.price}>
                                {product.price}
                            </span>
                            <span className={styles.discound}>
                                {product.discount}
                            </span>
                            <span className={styles.old_price}>
                                {product.oldPrice}
                            </span>
                        </p>
                    </div>

                    <div className={styles.btns_wrapper}>
                        <div
                            className={styles.box_btns}
                            onClick={updateQuantity}
                        >
                            <button
                                className={styles.btn_minus}
                                data-btn="minus"
                            >
                                {icons.minus}
                            </button>
                            <p className={styles.num} ref={num}>
                                {count}
                            </p>
                            <button className={styles.btn_plus} data-btn="plus">
                                {icons.plus}
                            </button>
                        </div>

                        <button className={styles.btn_add} onClick={addToCart}>
                            {icons.cart}
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;
