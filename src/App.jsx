import { useState } from 'react';
import Map from './components/Map';
import './App.css';

function App() {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  const handleCoordinateClick = (coords) => {
    setSelectedCoordinates(coords);
  };

  const clearCoordinates = () => {
    setSelectedCoordinates(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <h1>Atlas 3D</h1>
          </div>
          <div className="header-actions">
            {selectedCoordinates && (
              <button 
                className="btn-close"
                onClick={clearCoordinates}
                title="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>
      <main className="app-main">
        <Map onCoordinateClick={handleCoordinateClick} />
      </main>
      {selectedCoordinates && (
        <div className="coordinates-panel">
          <div className="panel-content">
            <div className="panel-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Location</span>
            </div>
            <div className="panel-data">
              <div className="data-row">
                <label>Latitude</label>
                <span className="value">{selectedCoordinates.lat}</span>
              </div>
              <div className="data-row">
                <label>Longitude</label>
                <span className="value">{selectedCoordinates.lng}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
