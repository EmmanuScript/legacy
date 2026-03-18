import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      text: "Krelis Legacy College transformed my daughter's academic journey. She scored 320 in JAMB and is now studying Medicine at the University of Lagos. The teachers are dedicated and the environment is excellent!",
      name: "Mrs. Chioma Adebayo",
      role: "Parent",
    },
    {
      text: "The JAMB tutorial program here is exceptional. I scored 298 and gained admission to study Engineering at Covenant University. The CBT practice sessions and dedicated teachers made all the difference.",
      name: "Tunde Ogunleye",
      role: "Former Student",
    },
    {
      text: "As an educator myself, I am impressed with the school's curriculum and teaching methods. My son has shown remarkable improvement in both academics and character. I highly recommend Krelis Legacy College!",
      name: "Dr. Fatima Mohammed",
      role: "Parent & Educator",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2>What Parents & Students Say</h2>
          <p>Hear from our community about their experiences</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
