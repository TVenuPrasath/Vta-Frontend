import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [selectedRole, setSelectedRole] = useState("candidate");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire("Error", "Email and password are required!", "error");
      return;
    }

    console.log("selectedRole:", selectedRole);
    const loginUrl =
      selectedRole === "candidate"
        ? "http://localhost:4000/api/candidate/login"
        : "http://localhost:4000/api/company/login";

    try {
      // console.log("loginUrl:", loginUrl);
      // console.log("Sending login request with:", formData);
      const response = await axios.post(loginUrl, formData);
      console.log("Login Response:", response.data);

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.data.token);
        localStorage.setItem("role", response.data.data.role);
        localStorage.setItem("userId", response.data.data._id);

        Swal.fire("Success", "Login successful!", "success");

        if (selectedRole === "candidate") {
          navigate("/CandidateDashboard");
        } else {
          navigate("/CompanyDashboard");
        }
      } else {
        Swal.fire("Error", "Invalid credentials. Please try again.", "error");
      }
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire(
        "Error",
        "Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  const loginWithGoogle = () => {
    window.open(
      `http://localhost:4000/auth/google?role=${selectedRole}`,
      "_self"
    );
  };

  return (
    <>
      <div className="page-wrapper">
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

        <div className="login-section">
          <div
            className="image-layer"
            style={{ backgroundImage: `url('/images/Sign Up Page.png')` }}
          />

          <div className="outer-box">
            <div className="login-form default-form">
              <div className="form-inner">
                <h3>Login to VTA</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "70px",
                  }}
                >
                  <div
                    className="toggle-buttons"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <button
                      className={` ${
                        selectedRole === "candidate"
                          ? "theme-btn btn-style-one"
                          : "inactive"
                      }`}
                      onClick={() => setSelectedRole("candidate")}
                    >
                      Candidate
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <button
                      className={` ${
                        selectedRole === "employer"
                          ? "theme-btn btn-style-one"
                          : "inactive"
                      }`}
                      onClick={() => setSelectedRole("employer")}
                    >
                      Employer
                    </button>
                  </div>
                </div>

                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
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
                      <Link to="/ForgotPassword" className="pwd">
                        Forgot password?
                      </Link>
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
                    Don't have an account? <Link to="/">Signup</Link>
                  </div>
                  <div className="divider">
                    <span>or</span>
                  </div>

                  <button
                    className="theme-btn social-btn-two google-btn"
                    onClick={loginWithGoogle}
                  >
                    Sign In With Google{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
