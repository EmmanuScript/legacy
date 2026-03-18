import "./DirectorMessage.css";

function DirectorMessage() {
  return (
    <section id="director-message" className="director-message-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Leadership</span>
          <h2>Director's Message</h2>
        </div>
        <div className="director-content">
          <div className="director-image">
            <img src="/legacy/Ajibola.png" alt="Ajibola Onanuga - Director" />
            <div className="director-name-card">
              <h3>Ajibola Onanuga</h3>
              <p>Director</p>
            </div>
          </div>
          <div className="director-text">
            <h3>Welcome to Krelis Legacy College</h3>
            <p>Dear Parents, Students, and Well-wishers,</p>
            <p>
              It is with great pleasure and pride that I welcome you to Krelis
              Legacy College, where we uphold the principle that "what is worth
              doing at all is worth doing well." Our mission is to provide
              quality education that not only focuses on academic excellence but
              also on character development and the holistic growth of every
              child.
            </p>
            <p>
              At Krelis Legacy College, we believe that every child is unique
              and possesses unlimited potential. Our dedicated team of
              experienced educators works tirelessly to create a safe,
              stimulating, and joyful learning environment where students can
              thrive academically, socially, and emotionally.
            </p>
            <p>
              We are proud of our track record of excellence spanning over 20
              years, and we continue to innovate and adapt our teaching methods
              to meet the evolving needs of our students. From nursery through
              secondary school, including our specialized SSCE and JAMB tutorial
              programs, we provide comprehensive educational programs that
              prepare our students for future success.
            </p>
            <p>
              I invite you to join our vibrant community where every child's
              potential is recognized, cultivated, and celebrated. Together, we
              are building future leaders who will make a positive impact on
              society.
            </p>
            <p className="director-signature">
              <strong>Ajibola Onanuga</strong>
              <br />
              <em>Director, Krelis Legacy College</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DirectorMessage;
