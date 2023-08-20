import "./styles/index.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import About from "./components/About";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Slider />
        <About />
      </main>
    </>
  );
}

export default App;
