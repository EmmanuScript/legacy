import "./Admissions.css";

function Admissions() {
  return (
    <section id="admissions" className="admissions-section">
      <div className="container">
        <div className="admissions-grid">
          <div className="admissions-content">
            <span className="section-badge">Admissions</span>
            <h2>Join Krelis Legacy College Today</h2>
            <p>
              Admission is ongoing for the 2026/2027 academic session. We
              welcome students who are committed to academic excellence and
              personal development.
            </p>
            <div className="admission-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Application</h4>
                  <p>
                    Complete the online application form or visit our office
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Entrance Examination</h4>
                  <p>Participate in our entrance examination and interview</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Admission Letter</h4>
                  <p>Receive your admission letter and complete registration</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">
              Apply Now
            </a>
          </div>
          <div className="admissions-image">
            <img
              src="/legacy/advert_for_college_admission_in_progress.jpeg"
              alt="Students"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admissions;
