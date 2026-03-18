import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/legacy/legacy_buiding_front_image.jpeg",
      title: "Building Future Leaders",
      subtitle: "What is worth doing at all is worth doing well",
      cta: "Apply for Admission",
    },
    {
      image: "/legacy/another_krelis_legacy_building_picture.jpeg",
      title: "Dedicated to Excellence",
      subtitle:
        "Empowering Students Through Quality Education and Character Development",
      cta: "Learn More",
    },
    {
      image:
        "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_199637522_4581755015185813_3453723090023265679_n.jpg",
      title: "Holistic Student Development",
      subtitle:
        "Building Confident, Knowledgeable, and Well-Rounded Individuals",
      cta: "Contact Us Today",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}
      <div className="hero-content">
        <h1 className="hero-title">{slides[currentSlide].title}</h1>
        <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
        <div className="hero-buttons">
          <a href="#admissions" className="btn btn-primary">
            {slides[currentSlide].cta}
          </a>
          <a href="#about" className="btn btn-secondary">
            Discover More
          </a>
        </div>
      </div>
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
