import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css'; // basic Splide theme
import './LandingPage.css';
import events from './assets/events.json';

export default function Events() {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '5rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Events</h1>

      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 3,
          gap: '1rem',
          autoScroll: {
            speed: 1.5,
          },
          arrows: false,
          pagination: false,
        }}
        extensions={{ AutoScroll }}
        aria-label="Auto-scrolling event slider"
      >
        {events.map((item, index) => (
          <SplideSlide key={index}>
            <div className="event-card">
              <img
                src={item.photo}
                alt={item.title}
                style={{
                  width: '90%',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
              <div className="event-info">
                <h3>{item.title}</h3>
                <p>📅 {item.date}</p>
                <p>🎟️ {item.slotsLeft} slots left</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
