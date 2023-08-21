import "./styles/index.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import About from "./components/Product";

function App() {
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
        <Nav />
        <Slider product={product} />
        <About product={product} />
      </main>
    </>
  );
}

export default App;
