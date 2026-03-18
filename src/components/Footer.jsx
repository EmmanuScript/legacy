import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Krelis Legacy College</h3>
            <p>
              "What is worth doing at all is worth doing well" - Building future
              leaders through quality education, character development, and
              academic excellence.
            </p>
            <div className="footer-contact-info">
              <div className="footer-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>18 Atinmo St, Ikosi Ketu, Lagos 105102</span>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-phone"></i>
                <span>+234 816 180 3338</span>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-envelope"></i>
                <span>info@krelislegacy.ng</span>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-clock"></i>
                <span>Mon - Fri: 7:30 AM - 4:00 PM</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#programs">Our Programs</a>
              </li>
              <li>
                <a href="#admissions">Admissions</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              <li>
                <a href="#programs">Nursery Education</a>
              </li>
              <li>
                <a href="#programs">Primary School</a>
              </li>
              <li>
                <a href="#programs">Secondary School</a>
              </li>
              <li>
                <a href="#programs">Junior Secondary</a>
              </li>
              <li>
                <a href="#programs">Senior Secondary</a>
              </li>
              <li>
                <a href="#admissions">Admission Inquiry</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for updates and news.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Krelis Legacy College. All rights reserved. | Building
            Foundations, Inspiring Futures, Empowering Excellence, Shaping
            Leaders
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
