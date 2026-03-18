import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      text: "Krelis Legacy College transformed my daughter's academic journey. She scored 320 in JAMB and is now studying Medicine at the University of Lagos. The teachers are dedicated and the environment is excellent!",
      name: "Mrs. Chioma Adebayo",
      role: "Parent",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    {
      text: "The JAMB tutorial program here is exceptional. I scored 298 and gained admission to study Engineering at Covenant University. The CBT practice sessions and dedicated teachers made all the difference.",
      name: "Tunde Ogunleye",
      role: "Former Student",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      text: "As an educator myself, I am impressed with the school's curriculum and teaching methods. My son has shown remarkable improvement in both academics and character. I highly recommend Krelis Legacy College!",
      name: "Dr. Fatima Mohammed",
      role: "Parent & Educator",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
    }
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
                <img src={testimonial.img} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
