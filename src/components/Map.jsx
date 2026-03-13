import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import PropTypes from 'prop-types';
import { mapStyle } from '../styles/mapStyle';
import './Map.css';

function Map({ onCoordinateClick }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [loading, setLoading] = useState(true);
  const [currentCoordinates, setCurrentCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [mapStatus, setMapStatus] = useState('Initializing...');

  useEffect(() => {
    if (map.current) return;

    console.log('=== MapLibre GL Initialization ===');
    console.log('Map container:', mapContainer.current);
    console.log('Map style:', mapStyle);

    try {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: mapStyle,
        center: [28.9784, 41.0082], // Istanbul - to see 3D buildings
        zoom: 14,
        pitch: 45,
        bearing: 0,
        attributionControl: true,
      });

      console.log('Map created successfully:', map.current);
      setMapStatus('Map created, loading tiles...');

      map.current.on('styledata', () => {
        console.log('Style loaded');
        setMapStatus('Style loaded, rendering map...');
      });

      map.current.on('sourcedata', () => {
        console.log('Source data loaded');
      });

      map.current.on('load', () => {
        setLoading(false);
        setMapStatus('Map loaded successfully!');
        console.log('=== Map loaded successfully! ===');
      });

      map.current.on('error', (e) => {
        console.error('=== Map error:', e);
        setError(e.error || e);
        setMapStatus('Error loading map');
      });

      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
      map.current.addControl(new maplibregl.ScaleControl({ maxWidth: 100, unit: 'metric' }), 'bottom-left');

      map.current.on('click', (e) => {
        const coords = {
          lng: e.lngLat.lng.toFixed(6),
          lat: e.lngLat.lat.toFixed(6)
        };
        setCurrentCoordinates(coords);
        console.log('Clicked at:', coords);
        if (onCoordinateClick) {
          onCoordinateClick(coords);
        }

        new maplibregl.Popup({ offset: 25 })
          .setLngLat(e.lngLat)
          .setHTML(`
            <div style="padding: 8px;">
              <strong>Coordinates</strong><br/>
              Lat: ${coords.lat}<br/>
              Lng: ${coords.lng}<br/>
              Zoom: ${map.current.getZoom().toFixed(1)}
            </div>
          `)
          .addTo(map.current);
      });
    } catch (error) {
      console.error('=== Map initialization error:', error);
      setError(error);
      setMapStatus('Initialization failed');
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [onCoordinateClick]);

  return (
    <div className="map-container">
      <div ref={mapContainer} className="map-wrapper" />
      
      {/* Debug Status Bar */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 1000,
        fontFamily: 'monospace'
      }}>
        <strong>Status:</strong> {mapStatus}
      </div>

      {loading && (
        <div className="map-loading">
          <div className="loading-spinner"></div>
          <p>Loading map tiles...</p>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>{mapStatus}</p>
        </div>
      )}

      {error && (
        <div className="map-error">
          <strong>Error loading map:</strong>
          <p>{error.message || JSON.stringify(error)}</p>
        </div>
      )}

      {currentCoordinates && (
        <div className="coordinates-display">
          <strong>Selected:</strong> {currentCoordinates.lat}, {currentCoordinates.lng}
        </div>
      )}
    </div>
  );
}

Map.propTypes = {
  onCoordinateClick: PropTypes.func,
};

export default Map;
