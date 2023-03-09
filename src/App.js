
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

function App() {
  const bg = "https://pixabay.com/images/id-3608029/"
  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer
          style={{
            background: "red",
          }}
        >
          <h3>parallax try out</h3>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          style={{
            background: `url(${bg})`,
          }}
        >
          <h3>Second text in this</h3>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <h3>Second text in this</h3>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            background: "orange",
          }}
        >
          <h3>The end of this parallax</h3>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
