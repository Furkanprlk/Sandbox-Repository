// Dark mode map style with 3D buildings
export const mapStyle = {
  version: 8,
  name: 'Dark 3D',
  sources: {
    'carto-dark': {
      type: 'vector',
      tiles: [
        'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.pbf',
        'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.pbf',
        'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.pbf',
        'https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.pbf'
      ],
      tileSize: 256,
      minzoom: 0,
      maxzoom: 20,
      attribution: '&copy; <a href="https://carto.com">CARTO</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
    }
  },
  layers: [
    // Background
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#1a1a2e'
      }
    },
    // Water
    {
      id: 'water',
      type: 'fill',
      source: 'carto-dark',
      'source-layer': 'water',
      paint: {
        'fill-color': '#16213e',
        'fill-opacity': 1
      }
    },
    // Landuse
    {
      id: 'landuse',
      type: 'fill',
      source: 'carto-dark',
      'source-layer': 'landuse',
      paint: {
        'fill-color': '#0f3460',
        'fill-opacity': 0.6
      }
    },
    // Parks
    {
      id: 'parks',
      type: 'fill',
      source: 'carto-dark',
      'source-layer': 'landuse',
      filter: ['==', 'class', 'park'],
      paint: {
        'fill-color': '#1a472a',
        'fill-opacity': 0.8
      }
    },
    // 3D Buildings (Extruded)
    {
      id: 'building-3d',
      type: 'fill-extrusion',
      source: 'carto-dark',
      'source-layer': 'building',
      minzoom: 15,
      paint: {
        'fill-extrusion-color': '#e94560',
        'fill-extrusion-height': ['*', ['number', ['get', 'height']], 3],
        'fill-extrusion-base': ['*', ['number', ['get', 'min_height']], 0],
        'fill-extrusion-opacity': 0.8
      }
    },
    // Roads low zoom
    {
      id: 'roads-low',
      type: 'line',
      source: 'carto-dark',
      'source-layer': 'road',
      minzoom: 0,
      maxzoom: 12,
      paint: {
        'line-color': '#2d3748',
        'line-width': 1
      }
    },
    // Roads high zoom
    {
      id: 'roads-high',
      type: 'line',
      source: 'carto-dark',
      'source-layer': 'road',
      minzoom: 12,
      paint: {
        'line-color': '#4a5568',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          1,
          16,
          3
        ]
      }
    },
    // Arterial roads
    {
      id: 'roads-arterial',
      type: 'line',
      source: 'carto-dark',
      'source-layer': 'road',
      filter: ['==', 'class', 'arterial'],
      paint: {
        'line-color': '#718096',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          2,
          16,
          4
        ]
      }
    },
    // Highways
    {
      id: 'roads-highway',
      type: 'line',
      source: 'carto-dark',
      'source-layer': 'road',
      filter: ['==', 'class', 'highway'],
      paint: {
        'line-color': '#f6ad55',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          10,
          2,
          14,
          4,
          18,
          6
        ],
        'line-opacity': 0.9
      }
    },
    // Transit lines
    {
      id: 'transit',
      type: 'line',
      source: 'carto-dark',
      'source-layer': 'transport_line',
      paint: {
        'line-color': '#667eea',
        'line-width': 2,
        'line-opacity': 0.7
      }
    },
    // Points of interest
    {
      id: 'poi',
      type: 'circle',
      source: 'carto-dark',
      'source-layer': 'poi',
      minzoom: 14,
      paint: {
        'circle-radius': 5,
        'circle-color': '#764ba2',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#667eea',
        'circle-opacity': 0.9
      }
    }
  ]
};
