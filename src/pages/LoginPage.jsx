import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate(); // React Router navigation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login check (Replace with API call)
    if (formData.username && formData.password) {
      console.log("Logging in with:", formData);
      alert("Login Successful!"); // Replace with SweetAlert or Toast message

      // Redirect to Dashboard or Home after login
      navigate("/dashboard");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="preloader" /> */}

        {/* Main Header */}
        <header className="main-header">
          <div className="container-fluid">
            <div className="main-box">
              <div className="nav-outer">
                <div className="logo-box">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="images/VTA-logo.png"
                        style={{ width: "60%", marginBottom: 5 }}
                        alt="VTA Logo"
                      />
                    </a>
                  </div>
                </div>
                <nav className="nav main-menu">
                  <ul className="navigation" id="navbar">
                    <li className="current">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="jobs.html">Jobs</a>
                    </li>
                    <li>
                      <a href="companies.html">Companies</a>
                    </li>
                    <li>
                      <a href="courses.html">Courses</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="outer-box">
                <div className="btn-box">
                  <a
                    href="register.html"
                    className="theme-btn theme-clone bdrs30"
                  >
                    Register
                  </a>
                  <a
                    href="login.html"
                    className="home21-jp-btn login-btn bdrs30"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Login Section */}
        <div className="login-section">
          <div
            className="image-layer"
            style={{ backgroundImage: `url('/images/Sign Up Page.png')` }}
          />

          <div className="outer-box">
            <div className="login-form default-form">
              <div className="form-inner">
                <h3>Login to VTA</h3>

                {/* Login Form */}
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      id="password-field"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div className="field-outer">
                      <div className="input-group checkboxes square">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          id="remember"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        <label htmlFor="remember" className="remember">
                          <span className="custom-checkbox" /> Remember me
                        </label>
                      </div>
                      <a href="#" className="pwd">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div className="form-group">
                    <button className="theme-btn btn-style-one" type="submit">
                      Log In
                    </button>
                  </div>
                </form>

                <div className="bottom-box">
                  <div className="text">
                    Don't have an account? <a href="register.html">Signup</a>
                  </div>
                  <div className="divider">
                    <span>or</span>
                  </div>

                  <div className="btn-box row">
                    <div className="col-lg-6 col-md-12">
                      <a
                        href="#"
                        className="theme-btn social-btn-two facebook-btn"
                      >
                        <i className="fab fa-facebook-f" /> Log In via Facebook
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <a
                        href="#"
                        className="theme-btn social-btn-two google-btn"
                      >
                        <i className="fab fa-google" /> Log In via Gmail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Login Form */}
          </div>
        </div>
        {/* End Info Section */}
      </div>
    </>
  );
};

export default Login;
