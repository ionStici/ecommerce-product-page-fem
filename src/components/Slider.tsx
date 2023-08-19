import React from "react";
import styles from "./../styles/slider.module.scss";

import prod_1 from "./../images/image-product-1.jpg";
import prod_1_sm from "./../images/image-product-1-thumbnail.jpg";

import prod_2 from "./../images/image-product-2.jpg";
import prod_2_sm from "./../images/image-product-2-thumbnail.jpg";

import prod_3 from "./../images/image-product-3.jpg";
import prod_3_sm from "./../images/image-product-3-thumbnail.jpg";

import prod_4 from "./../images/image-product-4.jpg";
import prod_4_sm from "./../images/image-product-4-thumbnail.jpg";

import icon_next from "./../images/icon-next.svg";
import icon_prev from "./../images/icon-previous.svg";

const iconNext = (
  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m2 1 8 8-8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const iconPrev = (
  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 1 3 9l8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const Slider = function () {
  const [count, setCount] = React.useState(1);
  const img: any = React.useRef(null);

  const imgs = [prod_1, prod_2, prod_3, prod_4];

  const moveImg = function (e) {
    const dir = e.target.dataset.img;

    if (dir === "prev" && count !== 1) {
      setCount((prev) => prev - 1);
      img.current.src = imgs[count - 2];
    }

    if (dir === "prev" && count === 1) {
      setCount(4);
      img.current.src = imgs[3];
    }

    if (dir === "next" && count !== 4) {
      setCount((prev) => prev + 1);
      img.current.src = imgs[count];
    }

    if (dir === "next" && count === 4) {
      setCount(1);
      img.current.src = imgs[0];
    }

    if (+dir >= 1 && +dir <= 4) {
      setCount(+dir);
      img.current.src = imgs[+dir - 1];

      // prettier-ignore
      const boxes = e.target.closest(`.${styles.imgs_box}`).querySelectorAll(`.${styles.btn_box}`);
      boxes.forEach((box) => box.classList.remove(styles.active));
      const box = e.target;
      box.classList.add(styles.active);
    }
  };

  return (
    <>
      <section className={styles.slider}>
        <div className={styles.img_box}>
          <img src={prod_1} className={styles.img} alt="" ref={img} />
        </div>

        <div className={styles.imgs_box}>
          <button
            className={`${styles.btn_box} ${styles.active}`}
            data-img="1"
            onClick={moveImg}
          >
            <img src={prod_1_sm} alt="" />
          </button>

          <button className={styles.btn_box} data-img="2" onClick={moveImg}>
            <img src={prod_2_sm} alt="" />
          </button>

          <button className={styles.btn_box} data-img="3" onClick={moveImg}>
            <img src={prod_3_sm} alt="" />
          </button>

          <button className={styles.btn_box} data-img="4" onClick={moveImg}>
            <img src={prod_4_sm} alt="" />
          </button>
        </div>

        <button className={styles.btn_prev} data-img="prev" onClick={moveImg}>
          {iconPrev}
        </button>

        <button className={styles.btn_next} data-img="next" onClick={moveImg}>
          {iconNext}
        </button>
      </section>
    </>
  );
};

export default Slider;
