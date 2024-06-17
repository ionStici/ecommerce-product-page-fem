import { useRef, useState } from 'react';
import styles from './../styles/product.module.scss';
import { useProduct } from '../ProductContext';
import { ReactSVG } from 'react-svg';
import Button from '../ui/Button';

const iconMinus = '/images/icon-minus.svg';
const iconPlus = '/images/icon-plus.svg';
const iconCart = '/images/icon-cart.svg';

const Product = function () {
  const { product, setQty } = useProduct();

  const [count, setCount] = useState(0);
  const addToCart = () => setQty(count);

  const num = useRef(null);

  const dec = () => {
    const numEl = num.current;

    numEl.classList.add(styles.an_m1);
    setTimeout(() => numEl.classList.add(styles.an_m2), 200);

    setTimeout(() => {
      setCount((prev) => prev - 1);
      numEl.classList.add(styles.an_m3);

      setTimeout(() => {
        numEl.classList.remove(styles.an_m1);
        numEl.classList.remove(styles.an_m2);
        numEl.classList.remove(styles.an_m3);
      }, 250);
    }, 220);
  };

  const inc = () => {
    const numEl = num.current;

    numEl.classList.add(styles.an_p1);
    setTimeout(() => numEl.classList.add(styles.an_p2), 200);

    setTimeout(() => {
      setCount((prev) => prev + 1);
      numEl.classList.add(styles.an_p3);

      setTimeout(() => {
        numEl.classList.remove(styles.an_p1);
        numEl.classList.remove(styles.an_p2);
        numEl.classList.remove(styles.an_p3);
      }, 250);
    }, 220);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.box_text}>
          <p className={styles.label}>{product.label}</p>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.text}>{product.description}</p>
        </div>

        <div className={styles.box_price}>
          <p>
            <span className={styles.price}>{product.price}</span>
            <span className={styles.discound}>{product.discount}</span>
            <span className={styles.old_price}>{product.oldPrice}</span>
          </p>
        </div>

        <div className={styles.btns_wrapper}>
          <div className={styles.box_btns}>
            <Button classes={styles.btn_minus} onClick={dec}>
              <ReactSVG src={iconMinus} />
            </Button>
            <p className={styles.num} ref={num}>
              {count}
            </p>
            <Button classes={styles.btn_plus} onClick={inc}>
              <ReactSVG src={iconPlus} />
            </Button>
          </div>

          <Button classes={styles.btn_add} onClick={addToCart}>
            <ReactSVG src={iconCart} />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Product;
