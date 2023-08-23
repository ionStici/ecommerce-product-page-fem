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

const iconClose = (
  <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
      fill="#69707D"
      fillRule="evenodd"
    />
  </svg>
);

const Slider = function () {
  const [count, setCount] = React.useState(1);
  const img: any = React.useRef(null);
  const boxes = React.useRef(null);

  const imgs = [prod_1, prod_2, prod_3, prod_4];

  const moveImg = function (e) {
    const dir = e.target.dataset.img;

    const btns = boxes.current.querySelectorAll(`.${styles.btn_box}`);
    btns.forEach((box) => box.classList.remove(styles.active));

    if (dir === "prev" && count !== 1) {
      setCount((prev) => prev - 1);
      img.current.src = imgs[count - 2];
      btns[imgs.indexOf(imgs[count - 2])].classList.add(styles.active);
    }

    if (dir === "prev" && count === 1) {
      setCount(4);
      img.current.src = imgs[3];
      btns[imgs.indexOf(imgs[3])].classList.add(styles.active);
    }

    if (dir === "next" && count !== 4) {
      setCount((prev) => prev + 1);
      img.current.src = imgs[count];
      btns[imgs.indexOf(imgs[count])].classList.add(styles.active);
    }

    if (dir === "next" && count === 4) {
      setCount(1);
      img.current.src = imgs[0];
      btns[imgs.indexOf(imgs[0])].classList.add(styles.active);
    }

    if (+dir >= 1 && +dir <= 4) {
      setCount(+dir);
      img.current.src = imgs[+dir - 1];
      btns[+dir - 1].classList.add(styles.active);
    }
  };

  // // // // // // // // // // // // // // // // // // // //

  const popupContainer = React.useRef(null);

  const openPopup = function ({ target }) {
    const popup = popupContainer.current;
    const body = target.closest("body");
    body.classList.add(styles.popup__overflow_hidden);

    popup.classList.add(styles.show_popup);
    setTimeout(() => popup.classList.add(styles.animate_popup), 1);
  };

  const closePopup = function ({ target }) {
    if (
      target.classList.contains(styles.popup__wrapper) ||
      target.classList.contains(styles.popup__close)
    ) {
      ("");
    } else return;

    const popup = popupContainer.current;
    const body = target.closest("body");
    body.classList.remove(styles.popup__overflow_hidden);

    popup.classList.remove(styles.animate_popup);
    popup.classList.remove(styles.show_popup);
  };

  // // // // // // // // // // // // // // // // // // // //

  const [popupCount, setPopupCount] = React.useState(1);
  const popupImg = React.useRef(null);

  const changePopupImg = function ({ target }) {
    const type = target.dataset.img;
    const img = popupImg.current;

    if (type === "prev" && popupCount > 1) {
      setPopupCount((p) => p - 1);
      img.src = imgs[popupCount - 2];
    }
    if (type === "prev" && popupCount === 1) {
      setPopupCount(4);
      img.src = imgs[3];
    }

    if (type === "next" && popupCount < 4) {
      setPopupCount((p) => p + 1);
      img.src = imgs[popupCount];
    }
    if (type === "next" && popupCount === 4) {
      setPopupCount(1);
      img.src = imgs[0];
    }

    if (+type >= 1 && +type <= 4) {
      setPopupCount(+type);
      img.src = imgs[+type - 1];
    }
  };

  // // // // // // // // // // // // // // // // // // // //

  return (
    <>
      <section className={styles.slider}>
        <div className={styles.img_box}>
          <img
            src={prod_1}
            className={styles.img}
            onClick={openPopup}
            alt=""
            ref={img}
          />
        </div>

        <div className={styles.imgs_box} ref={boxes}>
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

      <section className={styles.popup} ref={popupContainer}>
        <div className={styles.popup__wrapper} onClick={closePopup}>
          <div className={styles.popup__container}>
            <button className={styles.popup__close} onClick={closePopup}>
              {iconClose}
            </button>

            <div className={styles.popup__img_box}>
              <img
                className={styles.popup__img}
                src={prod_1}
                ref={popupImg}
                alt=""
              />
            </div>

            <button
              className={styles.popup__btn_prev}
              data-img="prev"
              onClick={changePopupImg}
            >
              {iconPrev}
            </button>

            <button
              className={styles.popup__btn_next}
              data-img="next"
              onClick={changePopupImg}
            >
              {iconNext}
            </button>

            <div className={styles.popup__imgs_container}>
              <button
                className={`${styles.popup__img_btn} ${styles.popup__img_btn_active}`}
                data-img="1"
                onClick={changePopupImg}
              >
                <img src={prod_1_sm} alt="" />
              </button>

              <button
                className={styles.popup__img_btn}
                data-img="2"
                onClick={changePopupImg}
              >
                <img src={prod_2_sm} alt="" />
              </button>

              <button
                className={styles.popup__img_btn}
                data-img="3"
                onClick={changePopupImg}
              >
                <img src={prod_3_sm} alt="" />
              </button>

              <button
                className={styles.popup__img_btn}
                data-img="4"
                onClick={changePopupImg}
              >
                <img src={prod_4_sm} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
