import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2 for alerts

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    name: "",
    gender: "",
    dob: "",
    college: "",
    year: "",
    resume: null,
    skills: [""],
    projects: [{ name: "", link: "" }],
  });

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChangePass = (e) => {
    const { value } = e.target;

    // Password validation regex
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!value) {
      setErrors({ ...errors, password: "Password cannot be empty." });
    } else if (!passwordRegex.test(value)) {
      setErrors({
        ...errors,
        password:
          "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    } else {
      setErrors({ ...errors, password: "Strong Password ✅" }); // Show success message
    }

    setFormData({
      ...formData,
      password: value, // Update the password field
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { name: "", link: "" }],
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };
  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const [step, setStep] = useState(1); // Tracks the current step

  const [errors, setErrors] = useState({}); // Stores form validation errors
  const validateFields = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (!formData.password) newErrors.password = "Password is required";
    } else if (step === 2) {
      if (!formData.name) newErrors.name = "Full name is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.dob) newErrors.dob = "Date of birth is required";
    } else if (step === 3) {
      if (!formData.college) newErrors.college = "College name is required";
      if (!formData.year) newErrors.year = "Year of studying is required";
      if (!formData.resume) newErrors.resume = "Resume upload is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      setStep(step + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields before proceeding.",
      });
    }
  };

  const [selectedRole, setSelectedRole] = useState("candidate"); // Default selected

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Updates the specific field
    });
  };

  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="preloader" /> */}
        {/* Main Header*/}
        {/*End Main Header */}
        {/* Main Header*/}
        <header className="main-header">
          <div className="container-fluid">
            {/* Main box */}
            <div className="main-box">
              {/*Nav Outer */}
              <div className="nav-outer">
                <div className="logo-box">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="images/VTA-logo.png"
                        style={{ width: "60%", marginBottom: 5 }}
                        alt=""
                        title=""
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
                    {/* Only for Mobile View */}
                    <li className="mm-add-listing">
                      <a
                        href="add-listing.html"
                        className="theme-btn btn-style-one"
                      >
                        Job Post
                      </a>
                      <span>
                        <span className="contact-info">
                          <span className="phone-num">
                            <span>Call us</span>
                            <a href="tel:1234567890">123 456 7890</a>
                          </span>
                          <span className="address">
                            329 Queensberry Street, North Melbourne VIC
                            <br />
                            3051, Australia.
                          </span>
                          <a
                            href="mailto:support@superio.com"
                            className="email"
                          >
                            support@superio.com
                          </a>
                        </span>
                        <span className="social-links">
                          <a href="#">
                            <span className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <span className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <span className="fab fa-instagram" />
                          </a>
                          <a href="#">
                            <span className="fab fa-linkedin-in" />
                          </a>
                        </span>
                      </span>
                    </li>
                  </ul>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="outer-box">
                {/* Login/Register */}
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
          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="logo">
              <a href="index.html">
                <img
                  src="images/VTA-logo.png"
                  style={{ width: "60%", marginBottom: 5 }}
                  alt=""
                  title=""
                />
              </a>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer clearfix">
              <div className="outer-box">
                {/* Login/Register */}
                <div className="login-box">
                  <a href="login-popup.html" className="call-modal">
                    <span className="icon-user" />
                  </a>
                </div>
                <a
                  href="#nav-mobile"
                  className="mobile-nav-toggler navbar-trigger"
                >
                  <span className="flaticon-menu-1" />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <div id="nav-mobile" />
        </header>
        {/* Info Section */}
        <div className="login-section">
          <div
            className="image-layer"
            style={{ backgroundImage: `url('/images/Register.png')` }}
          />
          <div className="outer-box">
            {/* Login Form */}
            <div className="login-form default-form">
              <div className="form-inner">
                <h3>Create a Free VTA Account</h3>
                {/* Login/Registration Form */}
                <form
                  method="post"
                  action="register.php" //-----------------------there is action
                  className="styled-form"
                  encType="multipart/form-data"
                >
                  {step === 1 && (
                    <div className="form-step">
                      <div className="form-group">
                        <div className="btn-box row">
                          {/* Candidate Button */}
                          <div className="col-lg-6 col-md-12">
                            <a
                              href="#"
                              className={
                                selectedRole === "candidate"
                                  ? "theme-btn candidate-button active"
                                  : "theme-btn employer-button disabled"
                              }
                              onClick={() => setSelectedRole("candidate")}
                            >
                              <i className="la la-user" /> Candidate
                            </a>
                          </div>

                          {/* Employer Button */}
                          <div className="col-lg-6 col-md-12">
                            <Link
                              to="/EmployerRegister" // Navigate to EmployerRegister page
                              className={
                                selectedRole === "employer"
                                  ? "theme-btn candidate-button active"
                                  : "theme-btn employer-button disabled"
                              }
                              onClick={() => setSelectedRole("employer")}
                            >
                              <i className="la la-building" /> Employer
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Password */}
                      <div className="form-group">
                        <label htmlFor="password-field">Password</label>
                        <input
                          id="password-field"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChangePass}
                          required
                        />
                        {errors.password && (
                          <small
                            className="password-message"
                            style={{
                              color:
                                errors.password === "Strong Password ✅"
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {errors.password}
                          </small>
                        )}
                      </div>
                    </div>
                  )}

                  {/* </div> */}
                  {step === 2 && (
                    <div className="form-step">
                      {/* Full Name */}
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name} // Controlled input
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          } // Update state
                          required
                        />
                      </div>

                      {/* Gender */}
                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender} // Controlled input
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          } // Update state
                          required
                        >
                          <option value="" disabled>
                            Select your gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Date of Birth */}
                      <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob} // Controlled input
                          onChange={(e) =>
                            setFormData({ ...formData, dob: e.target.value })
                          } // Update state
                          required
                        />
                      </div>

                      {/* Navigation Buttons */}
                      <div className="form-group">
                        <button
                          type="button"
                          id="prev-btn"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="form-step">
                      {/* College Name */}
                      <div className="form-group">
                        <label htmlFor="college">College Name</label>
                        <input
                          type="text"
                          id="college"
                          name="college"
                          placeholder="Enter your college name"
                          value={formData.college} // Controlled input
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              college: e.target.value,
                            })
                          } // Update state
                          required
                        />
                      </div>

                      {/* Year of Studying */}
                      <div className="form-group">
                        <label htmlFor="year">Year of Studying</label>
                        <select
                          id="year"
                          name="year"
                          value={formData.year} // Controlled input
                          onChange={(e) =>
                            setFormData({ ...formData, year: e.target.value })
                          } // Update state
                          required
                        >
                          <option value="" disabled>
                            Select your year
                          </option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                        </select>
                      </div>

                      {/* Resume Upload */}
                      <div className="form-group">
                        <label htmlFor="resume">Upload Resume</label>
                        <input
                          id="resume"
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              resume: e.target.files[0],
                            })
                          } // Handle file selection
                          required
                        />
                      </div>

                      {/* Navigation Buttons */}
                      <div className="form-group">
                        <button
                          type="button"
                          id="prev-btn"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                      </div>
                    </div>
                  )}
                  {step === 4 && (
                    <div className="form-step">
                      {/* Skills */}
                      <div className="form-group">
                        <label>Skills</label>
                        <div id="skills-container">
                          {formData.skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                              <input
                                type="text"
                                name={`skills[${index}]`}
                                placeholder="Enter skill"
                                value={skill}
                                onChange={(e) =>
                                  handleSkillChange(index, e.target.value)
                                }
                                required
                              />
                            </div>
                          ))}
                        </div>
                        <button type="button" onClick={addSkill}>
                          Add More Skills
                        </button>
                      </div>

                      {/* Projects */}
                      <div className="form-group">
                        <label>Projects</label>
                        <div id="projects-container">
                          {formData.projects.map((project, index) => (
                            <div key={index} className="project-item">
                              <input
                                type="text"
                                name={`projects[${index}].name`}
                                placeholder="Project Name"
                                value={project.name}
                                onChange={(e) =>
                                  handleProjectChange(
                                    index,
                                    "name",
                                    e.target.value
                                  )
                                }
                                required
                              />
                              <input
                                type="url"
                                name={`projects[${index}].link`}
                                placeholder="Project Link"
                                value={project.link}
                                onChange={(e) =>
                                  handleProjectChange(
                                    index,
                                    "link",
                                    e.target.value
                                  )
                                }
                                required
                              />
                            </div>
                          ))}
                        </div>
                        <button type="button" onClick={addProject}>
                          Add More Projects
                        </button>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="form-group">
                        <button
                          type="button"
                          id="prev-btn"
                          style={{ display: "none" }}
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button type="submit">Register</button>
                      </div>
                    </div>
                  )}
                  {/* Navigation Buttons */}
                  <div className="form-group">
                    <button type="button" id="next-btn" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                  {/* Register Button */}
                  <div className="form-group">
                    <button
                      className="theme-btn btn-style-one"
                      type="submit"
                      name="Register"
                      style={{ display: "none" }}
                      id="submit-btn"
                    >
                      Register
                    </button>
                  </div>
                </form>
                {/* RegisterPage.css */}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n                /* Style for navigation buttons */\n                .form-group button {\n                  background-color: #4caf50;\n                  color: white;\n                  padding: 10px 20px;\n                  margin: 5px;\n                  border: none;\n                  cursor: pointer;\n                  border-radius: 5px;\n                }\n\n                .form-group button:hover {\n                  background-color: #45a049;\n                }\n\n                #prev-btn {\n                  background-color: #f44336;\n                }\n\n                #prev-btn:hover {\n                  background-color: #e53935;\n                }\n\n                /* Additional styling for the form */\n                .form-group input[type="file"] {\n                  padding: 8px;\n                }\n\n                /* Styling for the dynamic addable fields */\n                .form-group div {\n                  margin-bottom: 10px;\n                }\n\n                .form-group input[type="text"],\n                .form-group input[type="url"],\n                .form-group input[type="date"],\n                .form-group select {\n                  width: 100%;\n                  padding: 10px;\n                  margin: 5px 0;\n                }\n\n                .form-group button[type="button"] {\n                  background-color: #2196f3;\n                  margin-top: 5px;\n                }\n              ',
                  }}
                />
                {/* <div class="bottom-box">
        <div class="divider"><span>or</span></div>
        <div class="btn-box row">
          <div class="col-lg-6 col-md-12">
            <a href="#" class="theme-btn social-btn-two facebook-btn"><i class="fab fa-facebook-f"></i> Log In via Facebook</a>
          </div>
          <div class="col-lg-6 col-md-12">
            <a href="#" class="theme-btn social-btn-two google-btn"><i class="fab fa-google"></i> Log In via Gmail</a>
          </div>
        </div>
      </div> */}
              </div>
            </div>
            {/*End Login Form */}
          </div>
        </div>
        {/* End Info Section */}
      </div>
      {/* End Page Wrapper */}
    </>
  );
};
export default RegisterPage;
