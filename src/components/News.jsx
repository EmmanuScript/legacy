import { Link } from "react-router-dom";
import "./News.css";

function News() {
  const newsItems = [
    {
      id: 1,
      date: "MAR 15",
      title:
        "Making a Difference: The Importance of JAMB Tutorial in Achieving High Scores",
      author: "Admin",
      excerpt:
        "Research shows that students who attend structured JAMB tutorial classes score an average of 35% higher than those who study independently. At Krelis Legacy College, our tutorial program has helped 92% of our students achieve scores above 250, with comprehensive teaching methods and personalized attention making all the difference...",
      image: "/legacy/ssce_and_jamb_tutorial.jpeg",
    },
    {
      id: 2,
      date: "MAR 12",
      title: "Menstrual Talk with Lola Carter - Empowering Our Students",
      author: "Admin",
      excerpt:
        "Krelis Legacy College hosted an enlightening session on menstrual health with renowned speaker Lola Carter. The event aimed to educate and empower our students with essential knowledge about menstrual health and hygiene...",
      image:
        "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_199637522_4581755015185813_3453723090023265679_n.jpg",
    },
    {
      id: 3,
      date: "MAR 05",
      title:
        "Empowering Students for Success: The Krelis Legacy Secondary School Experience",
      author: "Admin",
      excerpt:
        "We delve into the transformative secondary school experience offered at Krelis Legacy College. From rigorous academics to personalized support, extracurricular opportunities, and beyond, we showcase how we prepare students for future success...",
      image: "/legacy/another_kiddies_classroom_with_no_kids.jpeg",
    },
  ];

  return (
    <section id="news" className="news-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Latest Updates</span>
          <h2>School News</h2>
          <p>
            Stay updated with the latest news and events from Krelis Legacy
            College
          </p>
        </div>
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-date">{item.date}</div>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <div className="news-meta">
                  BY <span className="author">{item.author.toUpperCase()}</span>
                </div>
                <p>{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="read-more">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
