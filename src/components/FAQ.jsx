import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the admissions process at Krelis Legacy College?",
      answer:
        "At Krelis Legacy College, our admissions process is designed to be simple and transparent. To apply, parents can visit our school or contact us to obtain an application form. Once submitted, our admissions team will review the application and contact you to schedule an assessment and interview for the child.",
    },
    {
      question:
        "What extracurricular activities are available at Krelis Legacy College?",
      answer:
        "We offer a wide range of extracurricular activities including sports (football, basketball, athletics), arts and crafts, music, drama, debate club, science club, and various cultural activities. These activities help develop well-rounded students with diverse interests and skills.",
    },
    {
      question:
        "How does Krelis Legacy College support students with diverse learning needs?",
      answer:
        "We believe every child is unique and can excel. Our teachers are trained to identify and support diverse learning needs. We provide personalized attention, small class sizes, remedial classes when needed, and work closely with parents to ensure each child reaches their full potential.",
    },
    {
      question: "What is your teacher-to-student ratio?",
      answer:
        "We maintain small class sizes to ensure quality education and individual attention. Our teacher-to-student ratio varies by level: Nursery (1:15), Primary (1:20), and Secondary (1:25). This allows our teachers to give personalized attention to each student.",
    },
    {
      question: "Do you offer transportation services?",
      answer:
        "Yes, we offer safe and reliable school bus services covering various routes in Lagos. Our buses are well-maintained, driven by experienced drivers, and supervised by bus attendants to ensure student safety during transit.",
    },
    {
      question: "What curriculum do you follow?",
      answer:
        "We follow the Nigerian National Curriculum endorsed by the Federal Ministry of Education. For nursery and primary, we use a blend of play-based and structured learning. For secondary school, we prepare students for WAEC, NECO, and JAMB examinations with comprehensive coverage of all required subjects.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about Krelis Legacy College</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <i
                  className={`fas fa-chevron-${activeIndex === index ? "up" : "down"}`}
                ></i>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
