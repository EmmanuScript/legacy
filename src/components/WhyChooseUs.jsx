import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <span className="section-badge">Why Choose Us</span>
            <h2>Why Krelis Legacy College Stands Out</h2>
            <div className="why-items">
              <div className="why-item">
                <div className="why-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="why-text">
                  <h4>Proven Track Record</h4>
                  <p>
                    98% success rate in WAEC, NECO, and JAMB examinations over
                    the past decade.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="why-text">
                  <h4>Modern Facilities</h4>
                  <p>
                    State-of-the-art classrooms, science laboratories, computer
                    labs, and library.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="why-text">
                  <h4>Holistic Development</h4>
                  <p>
                    Focus on academic excellence, character building, and
                    leadership development.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="why-text">
                  <h4>Safe Environment</h4>
                  <p>
                    Secure and conducive learning environment with 24/7 security
                    and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-image">
            <img
              src="/legacy/advert_for_college_admission_in_progress.jpeg"
              alt="School facilities"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
