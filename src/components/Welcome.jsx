import "./Welcome.css";

function Welcome() {
  return (
    <section id="about" className="welcome-section">
      <div className="container">
        <div className="welcome-grid">
          <div className="welcome-image">
            <img
              src="/legacy/school_logo.jpeg"
              alt="Krelis Legacy College Logo"
            />
          </div>
          <div className="welcome-content">
            <span className="section-badge">About Us</span>
            <h2>Welcome to Krelis Legacy College</h2>
            <p className="tagline">
              "What is worth doing at all is worth doing well"
            </p>
            <p>
              Where excellence meets nurturing in the heart of Ikosi Ketu,
              Lagos, Nigeria. At Krelis Legacy College, we offer a comprehensive
              educational journey from nursery through primary to secondary
              school, ensuring your child receives a holistic and sound
              education.
            </p>
            <p>
              Our dedicated team of educators is committed to creating a safe,
              stimulating, and joyful environment where your child can thrive
              academically, socially, and emotionally.
            </p>
            <p>
              At Krelis Legacy College, where every child's potential is
              recognized, cultivated, and celebrated.
            </p>
            <div className="features">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Experienced & Qualified Teachers</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Modern Learning Facilities</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Conducive Learning Environment</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Character Development Programs</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
