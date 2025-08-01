import { useState } from "react";
import "./LandingPage.css";

export default function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(true);
  }
  function hideSidebar() {
    setSidebar(false);
  }
  return (
    <div className="navigation-container">
      <div className="navigation-items">
        <h1>Evende</h1>
      </div>
      <div className="navigation-items">
        <ul className={sidebar ? "side-toggle" : "hide-toggle"}>
          <li className="close-button">
            <i onClick={hideSidebar} className="fa-solid fa-xmark fa-lg"></i>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="">
              <p>Login/Register</p>
            </a>
          </li>
        </ul>
        <ul className="hideOnMobile">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navigation-items login-menu">
        <ul>
          <li className="hideOnMobile">
            <p>Login/Register</p>
          </li>
          <li>
            <i onClick={showSidebar} className="fa-solid fa-bars fa-lg"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
