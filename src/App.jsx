import './styles/index.scss';
import React from 'react';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Product from './components/Product';
import { product } from './data/product';

function App() {
    const [count, setCount] = React.useState(0);
    const addToCart = c => setCount(c);

    return (
        <main>
            <Nav product={product} count={count} addToCart={addToCart} />
            <Slider />
            <Product product={product} addToCart={addToCart} />
        </main>
    );
}

export default App;
