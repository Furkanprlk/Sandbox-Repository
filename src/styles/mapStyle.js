// Protomaps vector tile style specification
export const mapStyle = {
  version: 8,
  name: 'Protomaps',
  sources: {
    'protomaps': {
      type: 'vector',
      tiles: ['https://tile2.protomaps.com/tm/{z}/{x}/{y}.pmtiles'],
      maxzoom: 15
    }
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#f8f9fa'
      }
    },
    {
      id: 'water',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'water',
      paint: {
        'fill-color': '#a5d6ff',
        'fill-opacity': 1
      }
    },
    {
      id: 'landuse',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'landuse',
      paint: {
        'fill-color': '#e5e5e5',
        'fill-opacity': 0.5
      }
    },
    {
      id: 'parks',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'parks',
      paint: {
        'fill-color': '#c8e6c9',
        'fill-opacity': 0.7
      }
    },
    {
      id: 'aeroways',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'aeroways',
      paint: {
        'fill-color': '#e8e8e8',
        'fill-opacity': 0.7
      }
    },
    {
      id: 'buildings',
      type: 'fill',
      source: 'protomaps',
      'source-layer': 'buildings',
      paint: {
        'fill-color': '#d4d4d4',
        'fill-opacity': 0.7
      }
    },
    {
      id: 'roads_tunnel',
      type: 'line',
      source: 'protomaps',
      'source-layer': 'roads',
      filter: ['==', ['get', 'tunnel'], 1],
      paint: {
        'line-color': '#ffffff',
        'line-width': 1
      }
    },
    {
      id: 'roads_pier',
      type: 'line',
      source: 'protomaps',
      'source-layer': 'roads',
      filter: ['==', ['get', 'is_bridge'], 1],
      paint: {
        'line-color': '#ffffff',
        'line-width': 1
      }
    },
    {
      id: 'roads',
      type: 'line',
      source: 'protomaps',
      'source-layer': 'roads',
      paint: {
        'line-color': '#ffffff',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          6,
          0.5,
          12,
          1,
          14,
          2
        ],
        'line-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          6,
          0.4,
          12,
          0.8
        ]
      }
    },
    {
      id: 'roads_highway',
      type: 'line',
      source: 'protomaps',
      'source-layer': 'roads',
      filter: ['>=', ['get', 'kind'], 'motorway'],
      paint: {
        'line-color': '#ffd700',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          8,
          1,
          12,
          2,
          14,
          3
        ],
        'line-opacity': 0.9
      }
    },
    {
      id: 'transit',
      type: 'line',
      source: 'protomaps',
      'source-layer': 'transit',
      paint: {
        'line-color': '#880000',
        'line-width': 1,
        'line-opacity': 0.6
      }
    },
    {
      id: 'pois',
      type: 'circle',
      source: 'protomaps',
      'source-layer': 'pois',
      paint: {
        'circle-radius': 4,
        'circle-color': '#666666',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      filter: ['>=', ['zoom'], 14]
    }
  ]
};
