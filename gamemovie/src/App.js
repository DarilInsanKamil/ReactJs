import logo from './logo.svg';
import './App.css';
import nurture from './nurture.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hole">
          .
        </div>
        <img src={nurture} className="App-logo" alt="logo" />
        <p>
          Nurture
          <figcaption style={{ fontSize: '16px' }}>
            Porter Robinson
          </figcaption>
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/album/4Hjqdhj5rh816i1dfcUEaM"
          target="_blank"
          rel="noopener noreferrer"
        >
          go to spotify
        </a>
      </header>
    </div>
  );
}

export default App;
