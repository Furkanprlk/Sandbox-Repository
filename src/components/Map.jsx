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

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [0, 20],
      zoom: 2,
      attributionControl: true,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.addControl(new maplibregl.ScaleControl({ maxWidth: 100, unit: 'metric' }), 'bottom-left');

    map.current.on('load', () => {
      setLoading(false);
      console.log('Map loaded successfully with Protomaps vector tiles');
    });

    map.current.on('click', (e) => {
      const coords = {
        lng: e.lngLat.lng.toFixed(6),
        lat: e.lngLat.lat.toFixed(6)
      };
      setCurrentCoordinates(coords);
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
      {loading && (
        <div className="map-loading">
          <div className="loading-spinner"></div>
          <p>Loading vector tiles...</p>
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
