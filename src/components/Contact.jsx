import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xqapgpel");
  // Formspree form configured
  // Admin notifications will be sent to: oanjoyin@hgmail.com
  // For setup details, see FORMSPREE_SETUP.md

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reset form after successful submission
  if (state.succeeded) {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    }, 100);
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Contact Us</span>
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Reach out to us today!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Our Location</h4>
                <p>
                  18 Atinmo St, Ikosi Ketu,
                  <br />
                  Lagos 105102, Lagos State
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone Numbers</h4>
                <p>
                  +234 816 180 3338
                  <br />
                  +234 803 456 7890
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email Address</h4>
                <p>
                  info@krelislegacy.ng
                  <br />
                  admissions@krelislegacy.ng
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>
                  Monday - Friday: 7:30 AM - 4:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Contact Us Today</h3>
            <p className="form-description">All fields are obligatory</p>

            {state.succeeded ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h4>Message Sent Successfully!</h4>
                <p>
                  Thank you for contacting Krelis Legacy College. We have
                  received your message and will respond within 1 business day.
                </p>
                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "14px",
                    color: "#155724",
                  }}
                >
                  For urgent inquiries, please call us at{" "}
                  <strong>+234 816 180 3338</strong>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                  >
                    <option value="">Select Interest</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Primary School">Primary School</option>
                    <option value="Secondary School">Secondary School</option>
                    <option value="Admission Inquiry">Admission Inquiry</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <ValidationError
                    prefix="Interest"
                    field="interest"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your Message"
                    required
                    disabled={state.submitting}
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Submit"}
                </button>

                {state.errors && state.errors.length > 0 && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>
                      Failed to send message. Please try again or contact us
                      directly at +234 816 180 3338.
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="map-section">
          <h3>Find Us on the Map</h3>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=18+Atinmo+Street,+Ikosi+Ketu,+Lagos+105102&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krelis Legacy College Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
