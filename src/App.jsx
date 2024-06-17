import ProductProvider from './ProductContext';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Product from './components/Product';
import './styles/index.scss';

function App() {
  return (
    <ProductProvider>
      <Nav />
      <Slider />
      <Product />
    </ProductProvider>
  );
}

export default App;
