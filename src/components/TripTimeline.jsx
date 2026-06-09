import React from 'react';
import { motion } from 'framer-motion';
import { tripPhases } from '../data/tripData';
import { MapPin, Calendar } from 'lucide-react';

export default function TripTimeline({ currentPhase }) {
  return (
    <div className="timeline-container">
      {tripPhases.map((phase, index) => {
        const isCurrentPhase = currentPhase && currentPhase.id === phase.id;
        
        return (
          <motion.div 
            key={phase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="phase-card"
            style={{
              borderColor: isCurrentPhase ? '#ef4444' : 'rgba(255,255,255,0.6)',
              boxShadow: isCurrentPhase ? '0 10px 40px rgba(239, 68, 68, 0.15)' : '0 8px 30px rgba(0,0,0,0.04)'
            }}
          >
            <div className="phase-header">
              <h2>{phase.title}</h2>
              {isCurrentPhase && (
                <span style={{ 
                  display: 'inline-block', 
                  background: '#fef2f2', 
                  color: '#ef4444', 
                  padding: '4px 10px', 
                  borderRadius: '50px', 
                  fontSize: '0.8rem', 
                  fontWeight: '600',
                  marginTop: '10px' 
                }}>
                  📍 You are currently here!
                </span>
              )}
            </div>

            <div className="logistics-box">
                <strong>Logistics:</strong> {phase.logistics}
            </div>
            <div className="days-list">
              {phase.days.map((day, dIdx) => (
                <div key={dIdx} className="day-item">
                  {day.image && (
                    <div className="day-image-wrapper">
                      <img src={day.image} alt={day.title} className="day-image" />
                    </div>
                  )}
                  <span className="day-meta">
                    <Calendar size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }}/>
                    {day.date}
                  </span>
                  <h3 className="day-title">{day.title}</h3>
                  {day.details && day.details.length > 0 ? (
                    <ul className="plan-list">
                      {day.details.map((detail, detIdx) => (
                        <li key={detIdx}><strong>{detail.label}:</strong> {detail.text}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="day-details">{day.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
