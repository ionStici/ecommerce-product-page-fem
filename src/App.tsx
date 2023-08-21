import React from "react";
import "./styles/index.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Product from "./components/Product";

function App() {
  const [count, setCount] = React.useState(0);
  const addToCart = (c) => setCount(c);

  const product = {
    label: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "$125.00",
    discount: "50%",
    oldPrice: "$250.00",
  };

  return (
    <>
      <main>
        <Nav product={product} count={count} />
        <Slider />
        <Product product={product} addToCart={addToCart} />
      </main>
    </>
  );
}

export default App;
