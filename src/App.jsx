import { useState } from 'react';
import './styles/index.scss';

import Nav from './components/Nav';
import Slider from './components/Slider';
import Product from './components/Product';

const product = {
  label: 'Sneaker Company',
  title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '$125.00',
  discount: '50%',
  oldPrice: '$250.00',
  cover: '/images/image-product-1-thumbnail.jpg',
};

function App() {
  const [qty, setQty] = useState(0);
  const addToCart = (c) => setQty(c);

  return (
    <main>
      <Nav product={product} qty={qty} setQty={setQty} />
      <Slider />
      <Product product={product} addToCart={addToCart} />
    </main>
  );
}

export default App;
