import React from 'react';

export default function DrivingRules() {
  const rules = [
    {
      icon: "📷",
      title: "ZTL Zones (Zona a Traffico Limitato)",
      desc: "The historic centers of Rome, Matera, Ostuni, and most old towns are camera-enforced restricted zones. We must always park in public lots located outside the city walls to avoid automatic fines."
    },
    {
      icon: "🅿️",
      title: "Parking Lines",
      desc: "White lines mean parking is completely free. Blue lines mean paid parking—we must find the nearest automated meter (parcometro) to print a ticket for the dashboard."
    },
    {
      icon: "🛣️",
      title: "Highway Tolls",
      desc: "When entering the main Autostrada highways, we pull a paper ticket. When exiting, we insert it and pay with a credit card or cash. Avoid the yellow lanes labeled Telepass (electronic transponders only)."
    },
    {
      icon: "✈️",
      title: "June 29 Departure",
      desc: "Make an effortless morning drive straight to Leonardo da Vinci International Airport (FCO), drop off the rental car directly at the terminal, and walk straight to the gate for our flight home."
    }
  ];

  return (
    <div className="rules-dashboard">
      <h2>🚗 Essential Driving Rules</h2>
      <div className="rules-grid">
        {rules.map((rule, idx) => (
          <div className="rule-item" key={idx}>
            <div className="rule-icon">{rule.icon}</div>
            <div className="rule-text">
              <h4>{rule.title}</h4>
              <p>{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
