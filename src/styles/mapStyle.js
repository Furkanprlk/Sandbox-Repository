// Dark mode vector tile style with 3D buildings using Protomaps
export const mapStyle = {
  version: 8,
  name: 'Dark 3D Vector',
  sources: {
    'protomaps': {
      type: 'vector',
      tiles: [
        'https://tile.protomaps.com/2024/v4/{z}/{x}/{y}.pbf'
      ],
      maxzoom: 14,
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors &copy; <a href="https://protomaps.com">Protomaps</a>'
    }
  },
  layers: [
    // Water
    {
      id: 'water',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'water',
      paint: {
        'fill-color': '#0a0a15',
        'fill-opacity': 1
      }
    },
    // Land
    {
      id: 'land',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'landuse',
      filter: ['has', 'class'],
      paint: {
        'fill-color': '#0f0f1a',
        'fill-opacity': 1
      }
    },
    // Parks
    {
      id: 'parks',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'landuse',
      filter: ['==', 'class', 'park'],
      paint: {
        'fill-color': '#1a1a2e',
        'fill-opacity': 0.8
      }
    },
    // Roads
    {
      id: 'roads',
      type: 'line',
      source: 'protomaps',
      'source-layer': 'roads',
      paint: {
        'line-color': '#2a2a3e',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          8, 1,
          12, 2,
          16, 4
        ],
        'line-opacity': 0.8
      }
    },
    // Main Roads
    {
      id: 'main_roads',
      type: 'line',
      source: 'protomaps',
      'source-layer': 'roads',
      filter: ['==', 'highway', 'motorway'],
      paint: {
        'line-color': '#4a4a6a',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          8, 2,
          12, 4,
          16, 6
        ],
        'line-opacity': 0.9
      }
    },
    // Buildings 3D
    {
      id: 'buildings',
      type: 'fill-extrusion',
      source: 'protomaps',
      'source-layer': 'buildings',
      paint: {
        'fill-extrusion-color': '#3a3a5a',
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0,
          15.05, ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.8
      }
    },
    // Points of Interest
    {
      id: 'poi',
      type: 'circle',
      source: 'protomaps',
      'source-layer': 'pois',
      paint: {
        'circle-color': '#6366f1',
        'circle-radius': 4,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#0f0f1a'
      }
    },
    // Labels
    {
      id: 'labels',
      type: 'symbol',
      source: 'protomaps',
      'source-layer': 'places',
      layout: {
        'text-field': ['get', 'name'],
        'text-size': 12,
        'text-anchor': 'center',
        'text-offset': [0, 0.5]
      },
      paint: {
        'text-color': '#e0e0e0',
        'text-halo-color': '#0f0f1a',
        'text-halo-width': 2
      }
    }
  ]
};
