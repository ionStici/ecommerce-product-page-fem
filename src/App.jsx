import ProductProvider from './ProductContext';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Product from './components/Product';
import './styles/index.scss';
import { useState } from 'react';

const product = {
  label: 'Sneaker Company',
  title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '$125.00',
  discount: '50%',
  oldPrice: '$250.00',
  cover: '/images/image-product-1-thumbnail.jpg',
  images: [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg',
  ],
  smImages: [
    '/images/image-product-1-thumbnail.jpg',
    '/images/image-product-2-thumbnail.jpg',
    '/images/image-product-3-thumbnail.jpg',
    '/images/image-product-4-thumbnail.jpg',
  ],
};

function App() {
  const [qty, setQty] = useState(0);
  const addToCart = (c) => setQty(c);

  return (
    <ProductProvider>
      <Nav />
      <Slider />
      <Product product={product} addToCart={addToCart} />
    </ProductProvider>
  );
}

export default App;
