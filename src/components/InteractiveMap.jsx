import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { tripPhases, allCoordinates } from '../data/tripData';

// Fix for default Leaflet icon in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom icon for user location
const userIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #ef4444; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11]
});

// Component to handle automatic map bounds
function MapController({ bounds, userLocation }) {
  const map = useMap();

  useEffect(() => {
    if (bounds) {
      // If we have a specific bounds to show
      map.fitBounds(bounds, { padding: [50, 50], animate: true });
    } else if (userLocation) {
      // If we only want to center on user
      map.setView([userLocation.lat, userLocation.lng], 9, { animate: true });
    }
  }, [map, bounds, userLocation]);

  return null;
}

export default function InteractiveMap({ userLocation, inItaly, currentPhase }) {
  // Determine bounds to show
  let boundsToFit = null;
  
  if (inItaly && userLocation) {
    // If in Italy, maybe center on user or the current phase
    if (currentPhase) {
      // Add user location to the phase's bounding box so both are visible
      boundsToFit = L.latLngBounds([
        ...currentPhase.boundingBox, 
        [userLocation.lat, userLocation.lng]
      ]);
    } else {
      // Just center on user
      boundsToFit = L.latLngBounds([[userLocation.lat - 0.5, userLocation.lng - 0.5], [userLocation.lat + 0.5, userLocation.lng + 0.5]]);
    }
  } else {
    // Outside Italy or no location yet: show entire trip
    boundsToFit = L.latLngBounds(allCoordinates);
  }

  return (
    <MapContainer 
      bounds={boundsToFit}
      scrollWheelZoom={true} 
      style={{ height: '100%', width: '100%', zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      
      {/* Draw the full route line */}
      <Polyline 
        positions={allCoordinates} 
        color="#0f172a" 
        weight={4} 
        opacity={0.6} 
        dashArray="10, 10" 
      />

      {/* Markers for each trip phase */}
      {tripPhases.map((phase) => {
        const isCurrent = currentPhase && currentPhase.id === phase.id;
        return (
          <Marker 
            key={`phase-${phase.id}`} 
            position={phase.center}
            opacity={isCurrent ? 1 : 0.6}
          >
            <Popup>
              <strong>{phase.title}</strong><br/>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{phase.dates}</span><br/>
            </Popup>
          </Marker>
        );
      })}

      {/* User Location Marker */}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>
            <strong>You are here</strong>
          </Popup>
        </Marker>
      )}

      {boundsToFit && <MapController bounds={boundsToFit} />}
    </MapContainer>
  );
}
