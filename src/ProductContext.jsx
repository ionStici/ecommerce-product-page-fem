import { createContext, useContext, useState } from 'react';

const product = {
  label: 'Sneaker Company',
  title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '$125.00',
  discount: '50%',
  oldPrice: '$250.00',
  images: [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg',
  ],
  thImages: [
    '/images/image-product-1-thumbnail.jpg',
    '/images/image-product-2-thumbnail.jpg',
    '/images/image-product-3-thumbnail.jpg',
    '/images/image-product-4-thumbnail.jpg',
  ],
};

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [qty, setQty] = useState(0);

  return (
    <ProductContext.Provider value={{ product, qty, setQty }}>
      <main>{children}</main>
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) throw new Error('Error');
  return context;
}
