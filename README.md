# Italy Trip Interactive Planner 🇮🇹 🍕 🚗

An interactive, immersive Progressive Web App (PWA) built with React and Vite for tracking and experiencing a 16-day road trip through Italy.

## 🌟 Features

- **Immersive Holiday UI:** Features an elegant glassmorphism design, utilizing custom Google Fonts (Playfair Display) over stunning Italian background imagery.
- **Interactive Trip Map:** A fully integrated map utilizing Leaflet and premium CartoDB Voyager tiles. The map automatically bounds to your current region or centers on your live GPS location if you are currently within Italy.
- **Dynamic Daily Itinerary:** A deep-dive chronological timeline detailing every day, broken out by morning/afternoon schedules, travel logistics, and aesthetic location photography.
- **Essential Driving Rules:** A quick-reference safety guide covering ZTL zones, left-lane passing, and speeding camera (Tutor) rules to ensure a smooth road trip.
- **Progressive Web App (PWA):** Installs directly onto mobile devices as a native-feeling app using the Vite PWA plugin, providing offline caching and a standalone fullscreen experience perfect for referencing on the road.

## 🚀 Quick Start Guide

### Prerequisites
- Node.js installed

### Installation & Running Locally

1. Clone the repository:
```bash
git clone https://github.com/Kozaki88/italy-trip-test.git
cd italy-trip-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production (Generates PWA Service Workers):
```bash
npm run build
```

## 🛠 Tech Stack

- **React + Vite:** Core UI framework and fast bundler.
- **React-Leaflet:** For interactive maps mapping route paths and trip phases.
- **Vite PWA Plugin:** To enable offline capability and native mobile app installation.
- **Vanilla CSS:** Custom-styled components, animations, and glassmorphism.
- **Lucide React:** Minimalist, consistent iconography.

## 📱 How to Use the App

1. **Viewing the Timeline:** Scroll through the main dashboard to see high-level trip phases. Click on a specific phase to expand the card and view the granular details and imagery for those days.
2. **Interactive Map:** As you select different phases, the map automatically snaps to highlight the region you are reviewing. If you give location permissions (and are in Italy), it will also render a marker for where you currently are.
3. **Driving Rules:** Scroll to the bottom of the dashboard at any time to review the crucial Italian road laws.
4. **Installing on Phone:** Navigate to the live URL on your mobile browser (e.g., Safari or Chrome). Tap the "Share" or "Menu" icon, and select "Add to Home Screen" to install it as an app.
