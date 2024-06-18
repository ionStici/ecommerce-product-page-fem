import styles from './../styles/slider.module.scss';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useProduct } from '../ProductContext';
import Popup from './Popup';
import Button from '../ui/Button';

const iconNext = 'images/icon-next.svg';
const iconPrev = 'images/icon-previous.svg';

const Slider = function () {
  const { product } = useProduct();
  const { images, thImages } = product;

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    document.body.classList.add('hidden');
  };

  const closePopup = () => {
    setIsOpen(false);
    document.body.classList.remove('hidden');
  };

  const [currImg, setCurrImg] = useState(0);
  const nextImg = () => setCurrImg((prev) => (prev < 3 ? prev + 1 : 0));
  const prevImg = () => setCurrImg((prev) => (prev > 0 ? prev - 1 : 3));

  return (
    <>
      {isOpen && <Popup isOpen={isOpen} closePopup={closePopup} />}

      <section className={styles.slider}>
        <div className={styles.img_box}>
          <img
            src={images[currImg]}
            className={styles.img}
            onClick={openPopup}
            alt={product.title}
            width={445}
            height={445}
          />
        </div>

        <div className={styles.imgs_box}>
          {thImages.map((img, i) => (
            <Button
              key={img}
              classes={`${styles.btn_box} ${
                currImg === i ? styles.active : ''
              }`}
              onClick={() => setCurrImg(i)}
              ariaLabel="Change Image"
            >
              <img src={img} alt="" width={84} height={84} />
            </Button>
          ))}
        </div>

        <Button
          classes={styles.btn_prev}
          onClick={prevImg}
          ariaLabel="Previous Image"
        >
          <ReactSVG src={iconPrev} />
        </Button>

        <Button
          classes={styles.btn_next}
          onClick={nextImg}
          ariaLabel="Next Image"
        >
          <ReactSVG src={iconNext} />
        </Button>
      </section>
    </>
  );
};

export default Slider;
