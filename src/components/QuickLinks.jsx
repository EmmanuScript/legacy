import { Link } from "react-router-dom";
import "./QuickLinks.css";

function QuickLinks() {
  const quickLinks = [
    {
      icon: "fas fa-edit",
      title: "Registration Information",
      description:
        "Apply online effortlessly for a seamless admissions process",
      link: "#admissions",
      isExternal: false,
    },
    {
      icon: "fas fa-calendar-alt",
      title: "School Calendar",
      description:
        "View important dates and events throughout the academic year",
      link: "/events",
      isExternal: false,
      isRoute: true,
    },
    {
      icon: "fas fa-sun",
      title: "Summer Program",
      description:
        "Unlock summer fun and learning with our engaging summer classes",
      link: "#programs",
      isExternal: false,
    },
    {
      icon: "fas fa-clock",
      title: "Class Schedule",
      description: "Access your personalized class schedule with ease",
      link: "/login/student",
      isExternal: false,
      isRoute: true,
    },
    {
      icon: "fas fa-user-circle",
      title: "Student/Parent Login",
      description:
        "Easily access grades and communication through our secure portal",
      link: "/login/student",
      isExternal: false,
      isRoute: true,
    },
    {
      icon: "fas fa-book",
      title: "School Library",
      description:
        "Discover a world of knowledge and imagination in our school library",
      link: "#contact",
      isExternal: false,
    },
  ];

  return (
    <section className="quick-links-section">
      <div className="container">
        <div className="section-header">
          <h2>"Excellence in Education, Character in Leadership"</h2>
          <p>
            Our purpose at Krelis Legacy College is to inspire a lifelong love
            for learning, cultivate individual talents, and empower students to
            become confident, compassionate, and responsible citizens, equipped
            to positively impact the world around them
          </p>
        </div>
        <div className="quick-links-grid">
          {quickLinks.map((link, index) =>
            link.isRoute ? (
              <Link key={index} to={link.link} className="quick-link-card">
                <div className="quick-link-icon">
                  <i className={link.icon}></i>
                </div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </Link>
            ) : (
              <a key={index} href={link.link} className="quick-link-card">
                <div className="quick-link-icon">
                  <i className={link.icon}></i>
                </div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;
