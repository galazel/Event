import Navigation from "./Navigation";
import "./LandingPage.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Service from "./Service";
import services from "./assets/services.json";
import about from "./assets/about.json";
import AboutCard from "./AboutCard";
import Events from "./Events";

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
        {about.map((item, index) => (
          <AboutCard
            key={index}
            photo={item.photo}
            description={item.description}
          />
        ))}
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
function Questions() {
  return (
    <div className="questions-container">
      <div className="questions-title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="questions-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                1. How do I book an event?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                To book an event, simply browse the list of available events,
                select the one you're interested in, and click the "Book Now"
                button. You’ll be guided through a short registration and
                payment process.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                2. Can I create my own event on the platform?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes! As an organizer, you can create and publish your event
                through your dashboard. Just sign in as an organizer and click
                "Create Event" to get started.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                3. What kind of events can I create?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                You can create any type of event, such as workshops, seminars,
                concerts, meetups, classes, or private gatherings—physical or
                virtual.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                4. How do I edit or update my event after publishing it?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                You can edit your event details anytime before the event starts
                by going to your Organizer Dashboard and selecting the event you
                want to update.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                5. Can I limit the number of participants in my event?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Absolutely. While creating your event, you can set the maximum
                number of slots available. The system will automatically stop
                bookings once the limit is reached.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Contact()
{
  const [fullname,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [question,setQuestion] = useState('')

  function setNameValue(e)
  {
      setFullName(e)
  }
  function setEmailValue(e)
  {
      setEmail(e)
  }
  function setQuestionValue(e)
  {
      setQuestion(e)
  }
  function handleSubmit()
  {

  }
  return(
    <div className="contact-container">
      <div className="contact-title">
        <h1>Have Some Questions?</h1>
      </div>
      <div className="contact-form">
        <form>
          <div>
            <input type="text" placeholder="Name" onChange={e => setNameValue(e.target.value)}  value={fullname} />
          </div>
          <div>
            <input type="text" placeholder="Email" onChange={e => setEmailValue(e.target.value)}  value={email} />
          </div>
          <div>
            <textarea name="question" id="question" placeholder="What's on your mind?" maxLength={100} onChange={e => setQuestionValue(e.target.value)}  value={question}></textarea>
          </div>
          <div>
            <button className = "submit-button"onSubmit={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">

          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2025 Company, Inc</p>
      </footer>
    </div>
  );
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
      <Contact/>
      <Footer/>
    </div>
  );
}
