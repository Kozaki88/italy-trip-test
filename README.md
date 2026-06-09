# Italy Trip Interactive Web App

This is a Progressive Web App (PWA) built with React and Vite, designed to serve as an interactive, location-aware travel itinerary for a 16-Day Italian Road Trip.

## Features

- **Interactive Map:** A dynamic Leaflet map showing the entire road trip route, from the Tyrrhenian coast to the Adriatic.
- **Geolocation Awareness:** The app uses the device's location to determine if you are currently in Italy. 
  - If you are in Italy, the map will center on your location and automatically highlight the current phase of the trip you are closest to.
  - If you are outside Italy, it provides a full bird's-eye view of the entire 16-day route.
- **Mobile-First Progressive Web App (PWA):** The app can be installed directly to the home screen on iOS and Android devices, offering a native app-like experience.
- **Modern UI:** A premium design system utilizing glassmorphism, smooth animations (via Framer Motion), responsive layouts, and curated typography.
- **Trip Timeline:** An animated itinerary detailing each phase, day, and logistical details of the trip.

## Technology Stack

- **Framework:** React + Vite
- **Mapping:** Leaflet & React-Leaflet
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **PWA Capabilities:** vite-plugin-pwa

## Setup and Running Locally

1. **Install Dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open the localhost URL provided in your browser.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   The compiled output will be in the `dist` directory, ready to be deployed to a static host like Netlify or Vercel.

## Deployment to Netlify

You can easily deploy this app to Netlify:
1. Connect your GitHub repository to Netlify or drag and drop the `dist` folder directly into Netlify Drop.
2. Set the build command to `npm run build` and the publish directory to `dist`.
3. Your PWA will be live!

## How to use it on the road

1. Open the deployed website on your mobile phone's browser (Safari or Chrome).
2. Tap "Share" -> "Add to Home Screen" (iOS) or "Install App" (Android).
3. Open the app from your home screen.
4. Allow location permissions when prompted so the map can find where you are on the route!
