import styles from './../styles/slider.module.scss';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactSVG } from 'react-svg';
import Button from '../ui/Button';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useProduct } from '../ProductContext';

function Popup({ closePopup }) {
  const { product } = useProduct();
  const { images, thImages } = product;

  useEffect(() => {
    setTimeout(() => popup.current.classList.add(styles.animate_popup), 1);
  }, []);

  const [currImg, setCurrImg] = useState(0);

  const nextImg = () => setCurrImg((prev) => (prev < 3 ? prev + 1 : 0));
  const prevImg = () => setCurrImg((prev) => (prev > 0 ? prev - 1 : 3));

  const popup = useRef(null);
  const ref = useOutsideClick(closePopup);

  return createPortal(
    <section className={`${styles.popup}`} ref={popup}>
      <div className={styles.popup__wrapper}>
        <div className={styles.popup__container} ref={ref}>
          <Button classes={styles.popup__close} onClick={closePopup}>
            <ReactSVG src="/images/icon-close.svg" />
          </Button>

          <div className={styles.popup__img_box}>
            <img className={styles.popup__img} src={images[currImg]} alt="" />
          </div>

          <Button classes={styles.popup__btn_prev} onClick={prevImg}>
            <ReactSVG src="/images/icon-previous.svg" />
          </Button>

          <Button classes={styles.popup__btn_next} onClick={nextImg}>
            <ReactSVG src="/images/icon-next.svg" />
          </Button>

          <div className={styles.popup__imgs_container}>
            {thImages.map((img, i) => (
              <Button
                key={img}
                classes={`${styles.popup__img_btn} ${
                  currImg === i ? styles.popup__img_btn_active : ''
                }`}
                onClick={() => setCurrImg(i)}
              >
                <img src={img} alt="" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>,
    document.body
  );
}

export default Popup;
