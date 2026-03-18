import "./Loader.css";

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/legacy/school_logo.jpeg" alt="Krelis Legacy College" />
        </div>
        <div className="loader-spinner">
          <div className="spinner"></div>
        </div>
        <p className="loader-text">Loading Krelis Legacy College...</p>
      </div>
    </div>
  );
}

export default Loader;
