import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "./LandingPage.css";
import events from "./assets/events.json";

export default function Events() {
  return (
    <div className="events-container">
      <h1>Events</h1>

<Splide
  options={{
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3, // default for desktop
    gap: '1rem',
    autoScroll: {
      speed: 1.5,
    },
    arrows: false,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 2, // tablets
      },
      768: {
        perPage: 1, // mobile
      },
    },
  }}
  extensions={{ AutoScroll }}
  aria-label="Auto-scrolling event slider"
>

        {events.map((item, index) => (
          <SplideSlide key={index}>
            <div className="event-card">
              <img src={item.photo} alt={item.title} />
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
