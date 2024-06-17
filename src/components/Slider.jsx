import React from 'react';
import styles from './../styles/slider.module.scss';
import { iconNext, iconPrev, iconClose } from '../data/icons';

import prod_1 from './../images/image-product-1.jpg';
import prod_1_sm from './../images/image-product-1-thumbnail.jpg';

import prod_2 from './../images/image-product-2.jpg';
import prod_2_sm from './../images/image-product-2-thumbnail.jpg';

import prod_3 from './../images/image-product-3.jpg';
import prod_3_sm from './../images/image-product-3-thumbnail.jpg';

import prod_4 from './../images/image-product-4.jpg';
import prod_4_sm from './../images/image-product-4-thumbnail.jpg';

const Slider = function (props) {
  const [count, setCount] = React.useState(1);
  const img = React.useRef(null);
  const boxes = React.useRef(null);

  const imgs = [prod_1, prod_2, prod_3, prod_4];

  const moveImg = function (e) {
    const dir = e.target.dataset.img;

    const btns = boxes.current.querySelectorAll(`.${styles.btn_box}`);
    btns.forEach((box) => box.classList.remove(styles.active));

    if (dir === 'prev' && count !== 1) {
      setCount((prev) => prev - 1);
      img.current.src = imgs[count - 2];
      btns[imgs.indexOf(imgs[count - 2])].classList.add(styles.active);
    }

    if (dir === 'prev' && count === 1) {
      setCount(4);
      img.current.src = imgs[3];
      btns[imgs.indexOf(imgs[3])].classList.add(styles.active);
    }

    if (dir === 'next' && count !== 4) {
      setCount((prev) => prev + 1);
      img.current.src = imgs[count];
      btns[imgs.indexOf(imgs[count])].classList.add(styles.active);
    }

    if (dir === 'next' && count === 4) {
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
    if (window.matchMedia('(min-width: 500px)').matches) {
      const popup = popupContainer.current;
      const body = target.closest('body');
      body.classList.add(styles.popup__overflow_hidden);

      popup.classList.add(styles.show_popup);
      setTimeout(() => popup.classList.add(styles.animate_popup), 1);
    }
  };

  const closePopup = function ({ target }) {
    if (
      target.classList.contains(styles.popup__wrapper) ||
      target.classList.contains(styles.popup__close)
    ) {
      ('');
    } else return;

    const popup = popupContainer.current;
    const body = target.closest('body');
    body.classList.remove(styles.popup__overflow_hidden);

    popup.classList.remove(styles.animate_popup);
    popup.classList.remove(styles.show_popup);
  };

  // // // // // // // // // // // // // // // // // // // //

  const [popupCount, setPopupCount] = React.useState(1);
  const popupImg = React.useRef(null);
  const popupImgsBox = React.useRef(null);

  const changePopupImg = function ({ target }) {
    const type = target.dataset.img;
    const img = popupImg.current;

    const btns = popupImgsBox.current.querySelectorAll('button');
    btns.forEach((btn) => btn.classList.remove(styles.popup__img_btn_active));

    if (type === 'prev' && popupCount > 1) {
      setPopupCount((p) => p - 1);
      img.src = imgs[popupCount - 2];
      btns[popupCount - 2].classList.add(styles.popup__img_btn_active);
    }
    if (type === 'prev' && popupCount === 1) {
      setPopupCount(4);
      img.src = imgs[3];
      btns[3].classList.add(styles.popup__img_btn_active);
    }

    if (type === 'next' && popupCount < 4) {
      setPopupCount((p) => p + 1);
      img.src = imgs[popupCount];
      btns[popupCount].classList.add(styles.popup__img_btn_active);
    }
    if (type === 'next' && popupCount === 4) {
      setPopupCount(1);
      img.src = imgs[0];
      btns[0].classList.add(styles.popup__img_btn_active);
    }

    if (+type >= 1 && +type <= 4) {
      setPopupCount(+type);
      img.src = imgs[+type - 1];
      btns[+type - 1].classList.add(styles.popup__img_btn_active);
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

            <div className={styles.popup__imgs_container} ref={popupImgsBox}>
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
