import { Link } from "react-router-dom";
import "./Events.css";

function Events() {
  const events = [
    {
      id: 1,
      title: "Interhouse Sports Competition",
      date: "April 15 - 17, 2026",
      time: "8:00 AM - 4:00 PM",
      location: "School Sports Ground",
      description:
        "Annual interhouse sports competition featuring various athletic events including track and field, football, basketball, and more. All students are encouraged to participate and support their house teams.",
      category: "Sports",
      image: "/legacy/another_krelis_legacy_building_picture.jpeg",
    },
    {
      id: 2,
      title: "Parents-Teachers Meeting",
      date: "May 5, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "School Hall",
      description:
        "Quarterly parents-teachers meeting to discuss student progress and academic performance. All parents are encouraged to attend.",
      category: "Academic",
      image: "/legacy/kiddies_classroom_with_no_kids.jpeg",
    },
    {
      id: 3,
      title: "JAMB Mock Examination",
      date: "May 12, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Computer Lab",
      description:
        "Mock JAMB examination for all JAMB tutorial students to assess preparation and readiness.",
      category: "Examination",
      image: "/legacy/ssce_and_jamb_tutorial.jpeg",
    },
  ];

  return (
    <div className="events-page">
      <header className="events-header">
        <div className="container">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <h1>School Calendar & Events</h1>
          <p>Stay updated with important dates and upcoming school events</p>
        </div>
      </header>

      <section className="events-content">
        <div className="container">
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span
                    className={`event-category ${event.category.toLowerCase()}`}
                  >
                    {event.category}
                  </span>
                </div>
                <div className="event-details">
                  <h2>{event.title}</h2>
                  <div className="event-meta">
                    <div className="meta-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{event.date}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>{event.time}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
