import Map from './components/Map';
import './App.css';

function App() {
  const handleCoordinateClick = (coords) => {
    console.log('Clicked coordinates:', coords);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>MapLibre + Protomaps</h1>
          <p className="subtitle">Interactive Vector Map using OpenStreetMap Data</p>
        </div>
      </header>
      <main className="app-main">
        <Map onCoordinateClick={handleCoordinateClick} />
      </main>
    </div>
  );
}

export default App;
