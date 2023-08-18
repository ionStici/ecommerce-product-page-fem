import styles from "./../styles/slider.module.scss";

import prod_1 from "./../images/image-product-1.jpg";
import prod_1_sm from "./../images/image-product-1-thumbnail.jpg";

const Slider = function () {
  return (
    <>
      <section className={styles.slider}>
        <div className={styles.img_box}>
          <img src={prod_1} className={styles.img} alt="" />
        </div>
      </section>
    </>
  );
};

export default Slider;
