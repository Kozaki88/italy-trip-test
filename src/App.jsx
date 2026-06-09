import React, { useState, useEffect } from 'react';
import InteractiveMap from './components/InteractiveMap';
import TripTimeline from './components/TripTimeline';
import DrivingRules from './components/DrivingRules';
import { tripPhases, isWithinItaly } from './data/tripData';
import { Navigation } from 'lucide-react';

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [inItaly, setInItaly] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(null);

  useEffect(() => {
    // Geolocation API to track user
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation({ lat, lng });

          // Check if user is in Italy bounds
          const inside = isWithinItaly(lat, lng);
          setInItaly(inside);

          if (inside) {
            // Find closest phase based on distance to the first day's coordinates
            // This is a simple heuristic: find the phase with the minimum distance
            let closestPhase = null;
            let minDistance = Infinity;

            tripPhases.forEach(phase => {
              phase.days.forEach(day => {
                const [dLat, dLng] = day.coordinates;
                const dist = Math.sqrt(Math.pow(lat - dLat, 2) + Math.pow(lng - dLng, 2));
                if (dist < minDistance) {
                  minDistance = dist;
                  closestPhase = phase;
                }
              });
            });

            // If within a reasonable degree distance (e.g. ~100km radius), set as current
            if (minDistance < 1.0) {
              setCurrentPhase(closestPhase);
            } else {
              setCurrentPhase(null);
            }
          } else {
            setCurrentPhase(null);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
        },
        { enableHighAccuracy: true, maximumAge: 60000, timeout: 5000 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  return (
    <div className="app-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Our 16-Day Italian Road Trip</h1>
          <p>A coast-to-coast adventure blueprint.</p>
          <div className="highlight-tags">
            <span className="tag">📅 June 14 – June 29</span>
            <span className="tag">🚗 Rental Car</span>
            <span className="tag">🌊 Med & Adriatic</span>
          </div>
        </div>
        <a 
          href="https://www.google.com/maps/dir/41.7999,12.2462/41.7458,12.6644/41.8361,12.535/41.7561,12.2925/40.749,14.4862/40.8061,14.3475/40.8224,14.4289/40.4222,15.005/40.6666,16.6069/40.7289,17.5786/40.995,17.2197/42.0461,13.9242/41.965,12.7997/41.7999,12.2462" 
          target="_blank" 
          rel="noreferrer"
          className="btn-primary"
        >
          📍 Open in Google Maps
        </a>
      </header>

      <main className="main-content">
        <div className="map-container">
          <InteractiveMap 
            userLocation={userLocation} 
            inItaly={inItaly} 
            currentPhase={currentPhase} 
          />
          <div className="location-status">
            <Navigation size={18} color="#ef4444" />
            {userLocation 
              ? (inItaly 
                  ? (currentPhase ? `Near ${currentPhase.title}` : "Exploring Italy") 
                  : "Currently outside Italy (Showing full trip)")
              : "Locating you..."}
          </div>
        </div>

        <div className="content-wrapper">
          <TripTimeline currentPhase={currentPhase} />
          <DrivingRules />
        </div>
      </main>
    </div>
  );
}

export default App;
