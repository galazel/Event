import './LandingPage.css'
export default function Navigation()
{
    return(
            <div className="navigation-container">
                <div className="navigation-items">
                    <h1>Evende</h1>
                </div>
                <div className="navigation-items">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navigation-items">
                    <p>Login/Register</p>
                </div>
            </div>
    )
}