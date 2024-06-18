import { useProduct } from '../../ProductContext';
import styles from './../../styles/nav.module.scss';
import { ReactSVG } from 'react-svg';

function Cart({ open }) {
  const { product, qty, setQty } = useProduct();
  const newPrice = '$' + (+product.price.slice(1) * qty + '.00');

  return (
    <section className={`${styles.cart_box} ${open && styles.display_cart}`}>
      <p className={styles.cart_header}>Cart</p>
      {qty < 1 && <p className={styles.cart_empty_text}>Your cart is empty</p>}
      {qty > 0 && (
        <div className={styles.cart_product_wrapper}>
          <div className={styles.cart_product_box}>
            <img
              src={product.thImages[0]}
              className={styles.cart_product_img}
              alt={product.title}
            />

            <div className={styles.cart_text_box}>
              <p className={styles.cart_product_title}>{product.title}</p>
              <p className={styles.cart_product_price}>
                {product.price} x {qty} <span>{newPrice}</span>
              </p>
            </div>

            <button
              className={styles.cart_btn_delete}
              onClick={() => setQty(0)}
              aria-label="Clear Cart"
            >
              <ReactSVG src="images/icon-delete.svg" />
            </button>
          </div>

          <button className={styles.cart_btn_checkout}>Checkout</button>
        </div>
      )}
    </section>
  );
}

export default Cart;
