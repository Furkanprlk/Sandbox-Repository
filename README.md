# MapLibre + Protomaps

A modern web application built with React and MapLibre GL JS that displays vector tiles from Protomaps (OpenStreetMap data).

## Features

- **Vector Tile Rendering**: Uses Protomaps free vector tiles for true vector rendering
- **Interactive Map**: Pan, zoom, and click to see coordinates
- **Custom Styling**: MapLibre Style Specification with vector layers (water, roads, buildings, parks, etc.)
- **Responsive Design**: Works on desktop and mobile devices
- **Map Controls**: Navigation controls and scale bar
- **Popups**: Click anywhere to see coordinates and zoom level

## Technology Stack

- **React 18** - UI library
- **Vite** - Fast build tool and development server
- **MapLibre GL JS** - Open-source vector map library
- **Protomaps** - Free vector tiles based on OpenStreetMap

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:62033/Sandbox-Repository/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

### Manual Deployment

You can also deploy manually using gh-pages:

```bash
npm run deploy
```

## Protomaps Vector Tiles

The application uses Protomaps free vector tiles:
- URL: `https://tile2.protomaps.com/tm/{z}/{x}/{y}.pmtiles`
- No API key required
- Covers the entire world
- Based on OpenStreetMap data

### Vector Layers

The map displays the following vector layers:
- **Water**: Oceans, lakes, rivers
- **Landuse**: Agricultural, industrial, residential areas
- **Parks**: Parks and green spaces
- **Aeroways**: Airports and airfields
- **Buildings**: Building footprints
- **Roads**: All road types with highway highlighting
- **Transit**: Railway and transit lines
- **POIs**: Points of interest (visible at zoom 14+)

## Customization

### Map Style

Edit `src/styles/mapStyle.js` to customize the map appearance:

```javascript
export const mapStyle = {
  version: 8,
  sources: {
    'protomaps': {
      type: 'vector',
      tiles: ['https://tile2.protomaps.com/tm/{z}/{x}/{y}.pmtiles'],
      maxzoom: 15
    }
  },
  layers: [
    // Your layer definitions here
  ]
};
```

### Map Center and Zoom

Edit `src/components/Map.jsx` to change the initial view:

```javascript
map.current = new maplibregl.Map({
  container: mapContainer.current,
  style: mapStyle,
  center: [longitude, latitude],
  zoom: 2,
  // ...
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See LICENSE file for details.
