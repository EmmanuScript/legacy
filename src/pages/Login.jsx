import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const roleConfig = {
    student: {
      title: "Student Portal",
      icon: "fa-graduation-cap",
      color: "#8B4513",
    },
    teacher: {
      title: "Teacher Portal",
      icon: "fa-chalkboard-teacher",
      color: "#D2691E",
    },
    principal: {
      title: "Principal Portal",
      icon: "fa-user-tie",
      color: "#4A2C14",
    },
    admin: { title: "Admin Portal", icon: "fa-user-shield", color: "#8B4513" },
  };

  const config = roleConfig[role] || roleConfig.student;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate processing delay
    setTimeout(() => {
      setError(
        "Incorrect username or password. Please contact school administrator for details.",
      );
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <h2>KRELIS LEGACY COLLEGE</h2>
            <p>School Management System</p>
          </div>
        </div>

        <div className="login-content">
          <div className="login-info">
            <div className="role-icon" style={{ background: config.color }}>
              <i className={`fas ${config.icon}`}></i>
            </div>
            <h2>{config.title}</h2>
            <p>Sign in to access your account</p>

            <div className="portal-features">
              <h4>Portal Features:</h4>
              <ul>
                {role === "student" && (
                  <>
                    <li>
                      <i className="fas fa-check"></i> View grades and results
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Access course materials
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Check attendance
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Make payments
                    </li>
                  </>
                )}
                {role === "teacher" && (
                  <>
                    <li>
                      <i className="fas fa-check"></i> Manage classes
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Upload assignments
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Record attendance
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Submit grades
                    </li>
                  </>
                )}
                {role === "principal" && (
                  <>
                    <li>
                      <i className="fas fa-check"></i> School oversight
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Review reports
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Manage staff
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Approve requests
                    </li>
                  </>
                )}
                {role === "admin" && (
                  <>
                    <li>
                      <i className="fas fa-check"></i> System management
                    </li>
                    <li>
                      <i className="fas fa-check"></i> User administration
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Settings control
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Database access
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
              <h3>Sign In</h3>

              {error && <div className="error-message">{error}</div>}

              <div className="form-group">
                <label>Email Address</label>
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="other-portals">
              <p>Access other portals:</p>
              <div className="portal-links">
                {role !== "student" && <a href="/login/student">Student</a>}
                {role !== "teacher" && <a href="/login/teacher">Teacher</a>}
                {role !== "principal" && (
                  <a href="/login/principal">Principal</a>
                )}
                {role !== "admin" && <a href="/login/admin">Admin</a>}
              </div>
            </div>

            <button onClick={() => navigate("/")} className="back-home">
              <i className="fas fa-arrow-left"></i> Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
