# Sandbox-Repository - MapLibre + Protomaps Web Application

This repository contains a modern React web application that displays interactive vector maps using MapLibre GL JS and Protomaps free vector tiles.

## Project Overview

**Application Type**: Interactive Vector Map Web App
**Tech Stack**: React 18 + Vite + MapLibre GL JS + Protomaps
**Deployment**: GitHub Pages via GitHub Actions

## Quick Start Commands

```bash
# Install dependencies
npm install

# Development server (runs on port 62033)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
Sandbox-Repository/
├── src/
│   ├── components/
│   │   ├── Map.jsx           # Main Map component with MapLibre integration
│   │   └── Map.css           # Map component styles
│   ├── styles/
│   │   └── mapStyle.js       # MapLibre Style Specification for Protomaps
│   ├── App.jsx               # Root App component
│   ├── App.css               # App-level styles
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deployment workflow
├── vite.config.js            # Vite build configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## Key Technologies

### MapLibre GL JS
- Open-source fork of Mapbox GL JS
- Renders vector tiles with GPU acceleration
- Supports all MapLibre Style Specification features
- Package: `maplibre-gl`

### Protomaps Vector Tiles
- Free vector tiles from `https://tile2.protomaps.com/tm/{z}/{x}/{y}.pmtiles`
- Based on OpenStreetMap data
- No API key required
- Supports zoom levels 0-15

### Vector Layers
The map displays these vector layers from Protomaps:
- **water**: Oceans, lakes, rivers
- **landuse**: Agricultural, industrial, residential areas
- **parks**: Parks and green spaces
- **aeroways**: Airports and airfields
- **buildings**: Building footprints
- **roads**: All road types with highway highlighting
- **transit**: Railway and transit lines
- **pois**: Points of interest (zoom 14+)

## Customization

### Changing Map Style
Edit `src/styles/mapStyle.js` to modify colors, layer visibility, and styling.

### Changing Initial View
Edit `src/components/Map.jsx` line 32-34:
```javascript
center: [longitude, latitude],
zoom: 2,
```

### Adding Custom Layers
Add new layer objects to the `layers` array in `src/styles/mapStyle.js`.

## Deployment

### GitHub Pages (Automatic)
The `.github/workflows/deploy.yml` workflow automatically deploys to GitHub Pages on push to main branch.

### GitHub Pages (Manual)
```bash
npm run deploy
```

## Important Notes

- The build path is configured with `base: '/Sandbox-Repository/'` in `vite.config.js` for GitHub Pages deployment
- MapLibre GL CSS is imported in `src/components/Map.jsx`
- The application uses a loading spinner while vector tiles load
- Popups show coordinates and zoom level on map click
- The map is fully responsive with mobile-friendly controls

## Testing

To verify the application works:
1. Run `npm run dev` to start the development server
2. Navigate to `http://localhost:62033/Sandbox-Repository/`
3. Verify map loads with vector tiles
4. Test zoom, pan, and click interactions
5. Check different zoom levels for layer visibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Issues

- The JavaScript bundle is ~950KB due to MapLibre GL JS library size (normal for vector map libraries)
- Consider code splitting if adding more features
