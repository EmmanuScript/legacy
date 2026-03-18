import "./Programs.css";

function Programs() {
  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Programs</span>
          <h2>"Excellence in Education from Foundation to Future"</h2>
          <p>
            Comprehensive educational programs from nursery to tutorial classes
          </p>
        </div>
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-image">
              <img
                src="/legacy/advert_for_kids_school.jpeg"
                alt="Nursery and Primary"
              />
            </div>
            <div className="program-content">
              <div className="program-icon">
                <i className="fas fa-child"></i>
              </div>
              <h3>Nursery & Primary</h3>
              <p>
                Our nursery and primary programs at Krelis Legacy College
                provide a warm and caring environment for young learners to
                explore, learn, and grow. With engaging activities, experienced
                teachers, and a focus on early childhood and foundational
                development, we lay the groundwork for a lifetime of learning
                and success.
              </p>
              <a href="#contact" className="program-link">
                Read more <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="program-card">
            <div className="program-image">
              <img
                src="/legacy/advert_for_college_admission_in_progress.jpeg"
                alt="Secondary"
              />
            </div>
            <div className="program-content">
              <div className="program-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Secondary School</h3>
              <p>
                At Krelis Legacy College, our secondary school program offers a
                dynamic learning experience that prepares students for the
                challenges of tomorrow. With rigorous academics, personalized
                attention, and a supportive community, we foster critical
                thinking, creativity, and leadership skills that prepare
                students for success.
              </p>
              <a href="#contact" className="program-link">
                Read more <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="program-card">
            <div className="program-image">
              <img
                src="/legacy/ssce_and_jamb_tutorial.jpeg"
                alt="SSCE and JAMB Tutorial"
              />
            </div>
            <div className="program-content">
              <div className="program-icon">
                <i className="fas fa-book-reader"></i>
              </div>
              <h3>SSCE & JAMB Tutorial</h3>
              <p>
                Our specialized tutorial programs are designed to help students
                excel in their SSCE and JAMB examinations. With expert tutors,
                comprehensive coverage of the syllabus, past question practices,
                and proven teaching methodologies, we ensure students achieve
                outstanding results and gain admission into their choice
                institutions.
              </p>
              <a href="#contact" className="program-link">
                Read more <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
