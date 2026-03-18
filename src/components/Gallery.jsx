import "./Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      img: "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_199637522_4581755015185813_3453723090023265679_n.jpg",
      title: "Menstrual Talk with Lola Carter",
    },
    {
      img: "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_199037298_775473606486049_7466583123716080730_n.jpg",
      title: "Menstrual Talk with Lola Carter",
    },
    {
      img: "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_198344510_4145117672201705_5483784231573136323_n.jpg",
      title: "Menstrual Talk with Lola Carter",
    },
    {
      img: "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_197437965_4028240793926866_6001954250316001737_n.jpg",
      title: "Menstrual Talk with Lola Carter",
    },
    {
      img: "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_649928616_18079950770068718_6345280232368378428_n.jpg",
      title: "Menstrual Talk with Lola Carter",
    },
    {
      img: "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/SaveClip.App_651925462_18094220549012667_4587846979550277028_n.jpg",
      title: "Menstrual Talk with Lola Carter",
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Gallery</span>
          <h2>School Events & Activities</h2>
          <p>
            Menstrual Talk with Lola Carter - Empowering our students with
            knowledge
          </p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
