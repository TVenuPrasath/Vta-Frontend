import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployerRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    achievements: [{ description: "", year: "" }],
    profileImage: null,
    company: "",
    designation: "",
    fromYear: "",
    toYear: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    experience: "",
    hiringLevels: [],
    referralCode: "",
    industryType: "",
    function: "",
    hiringSkills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const addMoreAchievements = () => {
    setFormData({
      ...formData,
      achievements: [...formData.achievements, { description: "", year: "" }],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!"); // Temporary alert (replace with API call)
  };

  const [expanded, setExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const toggleDropdown = () => {
    setExpanded(!expanded);
  };
  const handleCheckboxChange = (e, level) => {
    let updatedOptions = [...selectedOptions];

    if (e.target.checked) {
      if (updatedOptions.length < 4) {
        updatedOptions.push(level);
      } else {
        alert("You can only select up to 4 options.");
        return;
      }
    } else {
      updatedOptions = updatedOptions.filter((item) => item !== level);
    }

    setSelectedOptions(updatedOptions);
  };
  const levels = ["Junior Level", "Mid Level", "High Level", "Top Management"];
  const HiringLevelDropdown = () => {};
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="preloader" /> */}
        {/* Header Span */}
        <span className="header-span" />
        {/* Main Header*/}
        <header className="main-header header-shaddow">
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
                    <li>
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
                        href="dashboard-post-job.html"
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
        {/*End Main Header */}
        {/* register form start */}
        <section className="emp-register-section">
          <ul className="emp-register-intro">
            <li>
              <h3>Create Recruiter Profile</h3>
            </li>
            <li>
              <p>
                Existing Employers/Recruiters?{" "}
                <Link to="/Login" className="rec-login">
                  Login
                </Link>
              </p>
            </li>
          </ul>
          <ul className="emp-register-ul">
            {/* emp-li-1 */}
            <li className="emp-li-1">
              <form onSubmit={handleSubmit} className="emp-form-right">
                <h5 style={{ fontWeight: 600 }}>Personal Details</h5>
                <br />
                <ul style={{ marginBottom: "2.5%" }}>
                  <li>
                    <div className="profile-box" id="profile-box">
                      <i className="fas fa-user user-icon" id="user-icon" />
                      <div
                        className="edit-icon"
                        onClick={() =>
                          document.getElementById("file-input").click()
                        }
                      >
                        <i className="fas fa-edit" />
                      </div>
                      <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </li>
                  <li>
                    <label>
                      First Name <span id="star">*</span>
                    </label>
                    <input
                      className="fn"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <label>Last Name</label>
                    <input
                      className="fn"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </li>
                </ul>

                <label>
                  Email Address <span id="star">*</span>
                </label>
                <input
                  className="fn"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label>
                  Mobile Number <span id="star">*</span>
                </label>
                <input
                  className="fn"
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="current-location">
                  Current Location: <span id="star">*</span>
                </label>
                <select
                  id="current-location"
                  name="location"
                  className="fn"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your state
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  {/* Add remaining states as needed */}
                </select>
                <div id="achievement-container">
                  <br />
                  <h5 style={{ fontWeight: 600 }}>Achievements</h5>
                  <br />
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-entry">
                      <label htmlFor={`description-${index}`}>
                        Description:
                      </label>
                      <div className="textarea-container">
                        <textarea
                          id={`description-${index}`}
                          name="description"
                          maxLength={250}
                          className="textarea-desc"
                          value={achievement.description}
                          onChange={(e) => {
                            const updatedAchievements = [
                              ...formData.achievements,
                            ];
                            updatedAchievements[index].description =
                              e.target.value;
                            setFormData({
                              ...formData,
                              achievements: updatedAchievements,
                            });
                          }}
                        />
                        <span className="char-count">
                          {250 - achievement.description.length} characters
                          remaining
                        </span>
                      </div>

                      {/* Year of Achievement */}
                      <label>Year of Achievement:</label>
                      <select
                        name="year"
                        className="year-select fn"
                        value={achievement.year}
                        onChange={(e) => {
                          const updatedAchievements = [
                            ...formData.achievements,
                          ];
                          updatedAchievements[index].year = e.target.value;
                          setFormData({
                            ...formData,
                            achievements: updatedAchievements,
                          });
                        }}
                        required
                      >
                        <option value="" disabled>
                          Select Year
                        </option>
                        {Array.from({ length: 15 }, (_, i) => 2010 + i).map(
                          (year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  ))}

                  {/* Add More Button */}
                  <button
                    type="button"
                    className="add-btn"
                    onClick={addMoreAchievements}
                  >
                    <i className="fa-solid fa-plus" /> Add More
                  </button>
                </div>
              </form>
            </li>
            {/* emp-li-2 */}
            <li className="emp-li-2">
              <form className="emp-form-right">
                <h5 style={{ fontWeight: 600 }}>Professional Details</h5>
                <br />

                {/* ul-1 */}
                <ul>
                  <li>
                    <label>
                      Current Company Name <span id="star">*</span>
                    </label>
                    <input
                      className="fn"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </li>

                  <li>
                    <label>
                      Current Designation <span id="star">*</span>
                    </label>
                    <input
                      className="fn"
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                  </li>

                  <li>
                    <label>
                      From <span id="star">*</span>
                    </label>
                    <select
                      className="fn"
                      name="fromYear"
                      value={formData.fromYear}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Year
                      </option>
                      {Array.from({ length: 15 }, (_, i) => 2010 + i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )}
                    </select>
                  </li>

                  <li>
                    <label>
                      To <span id="star">*</span>
                    </label>
                    <select
                      className="fn"
                      name="toYear"
                      value={formData.toYear}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Year
                      </option>
                      {Array.from({ length: 15 }, (_, i) => 2010 + i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )}
                    </select>
                  </li>
                </ul>
                {/* ul-1 */}
                <br />
                <h5 style={{ fontWeight: 600 }}>Company Address</h5>
                <br />
                <ul style={{ marginBottom: "1%" }}>
                  <li>
                    <label>
                      Address 1 <span id="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="fn"
                      name="address1"
                      value={formData.address1}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <label>Address 2</label>
                    <input
                      type="text"
                      className="fn"
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                    />
                  </li>
                </ul>

                {/* ul-3 */}
                <ul style={{ marginBottom: "1%" }}>
                  <li>
                    <label>
                      City <span id="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="fn"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <label>
                      State/Province/Region <span id="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="fn"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <label>
                      Country <span id="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="fn"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <label>
                      Zipcode <span id="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="fn"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                    />
                  </li>
                </ul>

                {/* ul-4 */}
                <ul style={{ marginBottom: "1%" }}>
                  {/* Total Experience in Hiring */}
                  <li>
                    <label>
                      Total Experience in Hiring <span id="star">*</span>
                    </label>
                    <select
                      className="fn"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Less than 1 Year">Less than 1 Year</option>
                      <option value="1 - 3 Years">1 - 3 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5 - 7 Years">5 - 7 Years</option>
                      <option value="7 - 9 Years">7 - 9 Years</option>
                      <option value="9 - 12 Years">9 - 12 Years</option>
                      <option value="12 - 15 Years">12 - 15 Years</option>
                      <option value="15+ Years">15+ Years</option>
                    </select>
                  </li>

                  {/* Level I Hire for - Multi-Checkbox Selection */}
                  <li>
                    {/* Select Box */}
                    <div className="select-box" onClick={toggleDropdown}>
                      <label>
                        Level I Hire for <span id="star">*</span>
                      </label>
                      <select disabled>
                        <option>
                          {selectedOptions.length > 0
                            ? selectedOptions.join(", ")
                            : "Select Options"}
                        </option>
                      </select>
                      <div className="over-select"></div>
                    </div>

                    {/* Checkboxes */}
                    {expanded && (
                      <div id="checkboxes-emp" className="checkboxes-emp">
                        {levels.map((level, index) => (
                          <label key={index} htmlFor={`option${index}`}>
                            <input
                              type="checkbox"
                              id={`option${index}`}
                              value={level}
                              checked={selectedOptions.includes(level)}
                              onChange={(e) => handleCheckboxChange(e, level)}
                            />
                            {level}
                          </label>
                        ))}
                      </div>
                    )}
                  </li>
                  {/* Referral Code */}
                  <li>
                    <label>
                      Referral Code <span id="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="fn"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleChange}
                      required
                    />
                  </li>
                </ul>

                {/* ul-5 */}
                <ul>
                  {/* Industry Type Dropdown */}
                  <li>
                    <label>
                      Industry Type <span id="star">*</span>
                    </label>
                    <select
                      className="fn"
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Advertising/PR/Events">
                        Advertising/PR/Events
                      </option>
                      <option value="Automotive">Automotive</option>
                      <option value="Banking and Financial Services">
                        Banking and Financial Services
                      </option>
                      <option value="Construction">Construction</option>
                      <option value="Consumer Goods">Consumer Goods</option>
                      <option value="Education">Education</option>
                      <option value="Energy (Oil, Gas, Solar, Wind, etc.)">
                        Energy (Oil, Gas, Solar, Wind, etc.)
                      </option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Hospitality and Tourism">
                        Hospitality and Tourism
                      </option>
                      <option value="Information Technology (IT)">
                        Information Technology (IT)
                      </option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Pharmaceuticals and Biotechnology">
                        Pharmaceuticals and Biotechnology
                      </option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Telecommunications">
                        Telecommunications
                      </option>
                      <option value="Utilities">Utilities</option>
                    </select>
                  </li>

                  {/* Function Dropdown */}
                  <li>
                    <label>
                      Function <span id="star">*</span>
                    </label>
                    <select
                      className="fn"
                      name="function"
                      value={formData.function}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Banking">Banking</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance and Accounting">
                        Finance and Accounting
                      </option>
                      <option value="Human Resources (HR)">
                        Human Resources (HR)
                      </option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Operations">Operations</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Supply Chain Management">
                        Supply Chain Management
                      </option>
                      <option value="Logistics">Logistics</option>
                      <option value="Research and Development (R&D)">
                        Research and Development (R&D)
                      </option>
                      <option value="Product Development">
                        Product Development
                      </option>
                      <option value="Training and Development">
                        Training and Development
                      </option>
                      <option value="Data Analytics">Data Analytics</option>
                    </select>
                  </li>
                </ul>

                {/* Skills I Hire For */}
                <label>
                  Skills I hire for <span id="star">*</span>
                </label>
                <input
                  type="text"
                  className="fn-textarea"
                  name="hiringSkills"
                  placeholder="Python, Java, React,..."
                  value={formData.hiringSkills}
                  onChange={handleChange}
                  required
                />
                <br />
                <br />

                {/* ul-6 */}
                <ul>
                  <li>
                    <input className="agree" type="checkbox" />
                  </li>
                  <li>
                    I agree to use the aforesaid details to create my Recruiter
                    Profile &amp; display it on the VTA site and also agree to
                    be bound by the Terms of Use &amp; Privacy of VTA
                  </li>
                </ul>
                <br />
                <button
                  type="submit"
                  className="submit-agree-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </li>
          </ul>
        </section>
        {/* register form ends */}
        {/* Main Footer */}
        <footer className="main-footer alternate5">
          <div className="auto-container">
            {/*Widgets Section*/}
            <div className="widgets-section">
              <div className="row">
                <div className="big-column col-xl-4 col-lg-3 col-md-12">
                  <div className="footer-column about-widget">
                    <div className="logo">
                      <a href="#">
                        <img
                          src="images/VTA-logo.png"
                          style={{ width: "60%", marginBottom: 5 }}
                          alt=""
                        />
                      </a>
                    </div>
                    <p className="phone-num">
                      <span>Call us </span>
                      <a href="thebeehost@support.com">1 (314) 732 0300</a>
                      <br />
                      <a href="thebeehost@support.com">+91 96000 85988</a>
                    </p>
                    <p className="address">
                      Akshaya HQ, Rajiv Gandhi Salai, Kazhipattur,
                      <br />
                      Tamil Nadu, Chennai - 603103, India. <br />
                    </p>
                    <p className="address">
                      1401, 21st ST STE 6310,
                      <br />
                      Sacramento, CA 95811, USA.
                    </p>
                    <a href="mailto:support@infoziant.com" className="email">
                      support@infoziant.com
                    </a>
                  </div>
                </div>
                <div className="big-column col-xl-8 col-lg-9 col-md-12">
                  <div className="row">
                    <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget">
                        <h4 className="widget-title">For Candidates</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li>
                              <a href="jobs.html">Browse Jobs</a>
                            </li>
                            <li>
                              <a href="candidate-dashboard-resume.html">
                                upload Resume
                              </a>
                            </li>
                            <li>
                              <a href="candidate-dashboard.html">
                                Find companies
                              </a>
                            </li>
                            <li>
                              <a href="candidate-dashboard-job-alerts.html">
                                Job Alerts
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget">
                        <h4 className="widget-title">For Employers</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li>
                              <a href="login.html">Employer login</a>
                            </li>
                            <li>
                              <a href="dashboard-post-job.html">Job posting</a>
                            </li>
                            <li>
                              <a href="#">Discover Talent</a>
                            </li>
                            <li>
                              <a href="dashboard-packages.html">Packages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget">
                        <h4 className="widget-title">About Us</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="faqs.html">FAQ</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget">
                        <h4 className="widget-title">Upskills</h4>
                        <div className="widget-content">
                          <ul className="list">
                            <li>
                              <a href="courses-allcourse.html">All courses</a>
                            </li>
                            <li>
                              <a href="course-enrolled.html">My courses</a>
                            </li>
                            <li>
                              <a href="completedcourses.html">
                                Completed Courses
                              </a>
                            </li>
                            <li>
                              <a href="SkillAssesmentdashboard.html">
                                Skill Assessment
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Bottom*/}
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="outer-box">
                <div className="copyright-text">
                  © 2024 <a href="#">VTA</a>. All Right Reserved.
                </div>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll To Top */}
          <div className="scroll-to-top scroll-to-target" data-target="html">
            <span className="fa fa-angle-up" />
          </div>
        </footer>
        {/* End Main Footer */}
      </div>
      {/* End Page Wrapper */}
    </>
  );
};

export default EmployerRegister;
