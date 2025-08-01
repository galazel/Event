import Navigation from "./Navigation";
import "./LandingPage.css";
import AOS from "aos";
import { useEffect } from "react";
import Service from "./Service";
import services from "./assets/services.json";
import about from "./assets/about.json";
import AboutCard from "./AboutCard";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}

function Hero() {
  return (
    <div className="hero-container" data-aos="fade-down">
      <div>
        <h2>Your Event, Perfectly Planned and Seamlessly Booked</h2>
      </div>
      <div>
        <p>
          From conferences to community nights, we handle the details—so you can
          focus on moments that matter. Book in minutes, manage in one place
        </p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="about-container" data-aos="fade-down">
      <div className="about-item">
        <h1>WHAT WE DO?</h1>
      </div>
      <div className="about-item about-images">
        {
          about.map((item,index) =>(
              <AboutCard
                key = {index}
                photo = {item.photo}
                description = {item.description}
              />
          ))
        }
      </div>
      <div className="about-item">
        <p className="about-description">
          At <b>Evende</b>, we help people discover, book, and create events—all
          in one place. Whethere you're someone looking to attend a seminar,
          workshop, or conference, or you're an organizer ready to host your own
          event, we provide tools to make it happen—easily and efficiently
        </p>
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="services-container" data-aos="fade-down">
      <div className="services-title">
        <h1>Services We Provide</h1>
      </div>
      <div className="services">
        {services.map((item, index) => (
          <Service
            key={index}
            photo={item.photo}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

function Events() {
  return <div className="events-container"></div>;
}
function Questions() {
  return <div className="events-container"></div>;
}
function Contact() {
  return <div className="events-container"></div>;
}
export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // duration in ms
  }, []);
  return (
    <div data-aos="fade-down">
      <Home />
      <About />
      <Services />
      <Events />
      <Questions />
      <Contact />
    </div>
  );
}
