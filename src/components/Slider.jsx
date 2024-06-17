import React, { useState } from 'react';
import styles from './../styles/slider.module.scss';
import Popup from './Popup';

//

import { iconNext, iconPrev } from '../data/icons';

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

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    document.body.classList.add(styles.popup__overflow_hidden);
  };

  const closePopup = () => {
    setIsOpen(false);
    document.body.classList.remove(styles.popup__overflow_hidden);
  };

  return (
    <>
      {isOpen && <Popup isOpen={isOpen} closePopup={closePopup} />}

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
    </>
  );
};

export default Slider;
