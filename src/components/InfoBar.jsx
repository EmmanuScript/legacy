import "./InfoBar.css";

function InfoBar() {
  return (
    <section className="info-bar">
      <div className="container">
        <div className="info-item">
          <i className="fas fa-graduation-cap"></i>
          <div>
            <h3>20+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-users"></i>
          <div>
            <h3>800+</h3>
            <p>Students</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-chalkboard-teacher"></i>
          <div>
            <h3>20+</h3>
            <p>Qualified Teachers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoBar;
