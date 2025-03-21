import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TemporaryDrawer from "./SideBar";
const ApplyJob = () => {
  const { jobId } = useParams();
  const [job, setjob] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/job/${jobId}`)
      .then((response) => {
        setjob(response.data.data);
      })
      .catch((error) => console.log("Error fetching job details", error));
  }, [jobId]);

  if (!job) {
    return <p>Loading job details...</p>;
  }
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="preloader" /> */}
        {/* Header Span */}
        <span className="header-span" />
        {/* Main Header*/}
        <header className="main-header">
          {/* Main box */}
          <div className="main-box">
            {/*Nav Outer */}
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <Link to="index.html">
                    <img
                      src="/images/VTA-logo.png"
                      style={{ width: "60%", marginBottom: 5 }}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>
                    <Link to="about.html">About</Link>
                  </li>
                  <li className="current ">
                    <Link to="jobs.html">Jobs</Link>
                  </li>
                  <li>
                    <Link to="companies.html">Companies</Link>
                  </li>
                  <li>
                    <Link to="courses.html">Courses</Link>
                  </li>
                  {/* Only for Mobile View */}
                  <li className="mm-add-listing">
                    <Link
                      to="add-listing.html"
                      className="theme-btn btn-style-one"
                    >
                      Job Post
                    </Link>
                    <span>
                      <span className="contact-info">
                        <span className="phone-num">
                          <span>Call us</span>
                          <Link to="tel:1234567890">123 456 7890</Link>
                        </span>
                        <span className="address">
                          329 Queensberry Street, North Melbourne VIC <br />
                          3051, Australia.
                        </span>
                        <Link to="mailto:support@superio.com" className="email">
                          support@superio.com
                        </Link>
                      </span>
                      <span className="social-links">
                        {/* <Link to="#">
                          <span className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <span className="fab fa-twitter" />
                        </Link>
                        <Link to="#">
                          <span className="fab fa-instagram" />
                        </Link>
                        <Link to="#">
                          <span className="fab fa-linkedin-in" />
                        </Link> */}
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>
              {/* Main Menu End*/}
            </div>
            <div className="outer-box">
              {/* Add Listing */}
              <Link
                to="candidate-dashboard-cv-manager.html"
                className="upload-cv"
              >
                Upload your CV
              </Link>
              {/* Login/Register */}
              <div className="btn-box">
                <Link
                  to="login-popup.html"
                  className="theme-btn btn-style-three call-modal"
                >
                  <span style={{ color: "white" }}>Login / Register</span>
                </Link>
                <Link
                  to="dashboard-post-job.html"
                  className="theme-btn btn-style-one"
                >
                  <span style={{ color: "white" }}>Job Post</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="logo">
              <Link to="index.html">
                <img
                  src="/images/VTA-logo.png"
                  style={{ width: "60%", marginBottom: 5 }}
                  alt="logo"
                />
              </Link>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer clearfix">
              <div className="outer-box">
                {/* Login/Register */}
                <div className="login-box">
                  <Link to="login-popup.html" className="call-modal">
                    <span className="icon-user" />
                  </Link>
                </div>
                <TemporaryDrawer />
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <div id="nav-mobile" />
        </header>
        {/*End Main Header */}
        {/* Job apply Section */}
        <section className="job-apply">
          <div className="job-form-intro">
            <h2 style={{ color: "black" }}>{job.title}</h2>
            <p>
              <span className="icon flaticon-map-locator" /> {job.location}
            </p>
          </div>
          <Link to="candidate-dashboard-profile.html" className="edit-btn">
            <i className="fa-light fa-pen-to-square" /> Edit
          </Link>
          <form className="job-apply-form active">
            <h4>Personal Information</h4>
            <br />
            <ul className="form-align">
              <li>
                <label>Full Name :</label>
                <br />
                <input
                  type="text"
                  id="fullName"
                  defaultValue="Fiza Hussain"
                  readOnly=""
                />
              </li>
              <li>
                <label>Email :</label>
                <br />
                <input
                  type="email"
                  id="email"
                  defaultValue="fiza@gmail.com"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Profile Description :</label>
                <br />
                <textarea
                  id="comments"
                  name="comments"
                  defaultValue={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
                  }
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Phone :</label>
                <br />
                <input
                  type="text"
                  id="phone"
                  defaultValue="+91 123456789"
                  readOnly=""
                />
              </li>
              <li>
                <label>Age :</label>
                <br />
                <input type="number" id="age" defaultValue={23} readOnly="" />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Country :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="India"
                  readOnly=""
                />
              </li>
              <li>
                <label>City :</label>
                <br />
                <input
                  type="text"
                  id="city"
                  defaultValue="Chennai"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Full Address :</label>
                <br />
                <input
                  type="text"
                  id="address"
                  defaultValue="No.8, Rajiv Gandhi road, Chennai - 600044"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Current Salary :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="3,00,000 INR"
                  readOnly=""
                />
              </li>
              <li>
                <label>Expected Salary :</label>
                <br />
                <input
                  type="text"
                  id="city"
                  defaultValue="5,00,000 INR"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Education Level :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="Bachelors Degree"
                  readOnly=""
                />
              </li>
              <li>
                <label>Total years of Experience :</label>
                <br />
                <input type="text" id="city" defaultValue="0-1" readOnly="" />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Languages :</label>
                <br />
                <input
                  type="text"
                  id="address"
                  defaultValue="Tamil, English, Hindi, urdu"
                  readOnly=""
                />
              </li>
            </ul>
            <div className="apply-next-btn">
              <button type="button" id="next-1" className="next-btn">
                Next
              </button>
            </div>
          </form>
          {/* form-2 */}
          <form className="job-apply-form">
            <h4>Education</h4>
            <br />
            <ul className="form-align">
              <li>
                <label>Institution :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="BSA.Crescent Engineering College"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Degree :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="Bachelor Of Technology"
                  readOnly=""
                />
              </li>
              <li>
                <label>Department :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="Information Technology"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Start Date :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue={2018}
                  readOnly=""
                />
              </li>
              <li>
                <label>End Date :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue={2022}
                  readOnly=""
                />
              </li>
            </ul>
            <br />
            <h4>Work Experience</h4>
            <br />
            <ul className="form-align">
              <li>
                <label>Company Name :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="Infoziant"
                  readOnly=""
                />
              </li>
              <li>
                <label>Designation :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="Software Engineer"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Start Date :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue={2018}
                  readOnly=""
                />
              </li>
              <li>
                <label>End Date :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue={2022}
                  readOnly=""
                />
              </li>
            </ul>
            <br />
            <h4>Skills</h4>
            <br />
            <ul className="form-align">
              <li>
                <input
                  type="text"
                  id="country"
                  defaultValue="React.js, Java, Next.js, SQL, Python"
                  readOnly=""
                />
              </li>
            </ul>
            <div className="btn-flex">
              <button type="button" id="back-2" className="back-btn">
                Back
              </button>
              <button type="button" id="next-2" className="next-btn">
                Next
              </button>
            </div>
          </form>
          <form className="job-apply-form">
            <ul className="form-align">
              <li>
                <label>Resume :</label>
                <br />
                <input
                  type="text"
                  id="country"
                  defaultValue="fiza-resume.pdf"
                  readOnly=""
                />
              </li>
            </ul>
            <ul className="form-align">
              <li>
                <label>Message to the Hiring Manager :</label>
                <br />
                <textarea defaultValue={""} />
              </li>
            </ul>
            <div className="btn-flex">
              <button type="button" id="back-3" className="back-btn">
                Back
              </button>
              <button type="submit" id="submit-3" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
          <br />
          <br />
        </section>
        {/* End Job apply Section */}
        {/* Main Footer */}
        <footer className="main-footer alternate5">
          <div className="auto-container">
            {/*Widgets Section*/}
            <div className="widgets-section">
              <div className="row">
                <div className="big-column col-xl-4 col-lg-3 col-md-12">
                  <div className="footer-column about-widget">
                    <div className="logo">
                      <Link to="#">
                        <img
                          src="images/VTA-logo.png"
                          style={{ width: "60%", marginBottom: 5 }}
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <p className="phone-num">
                      <span>Call us </span>
                      <Link to="thebeehost@support.com">1 (314) 732 0300</Link>
                      <br />
                      <Link to="thebeehost@support.com">+91 96000 85988</Link>
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
                    <Link to="mailto:support@infoziant.com" className="email">
                      support@infoziant.com
                    </Link>
                    <p />
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
                              <Link to="jobs.html">Browse Jobs</Link>
                            </li>
                            <li>
                              <Link to="candidate-dashboard-resume.html">
                                upload Resume
                              </Link>
                            </li>
                            <li>
                              <Link to="candidate-dashboard.html">
                                Find companies
                              </Link>
                            </li>
                            <li>
                              <Link to="candidate-dashboard-job-alerts.html">
                                Job Alerts
                              </Link>
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
                              <Link to="login.html">Employer login</Link>
                            </li>
                            <li>
                              <Link to="dashboard-post-job.html">
                                Job posting
                              </Link>
                            </li>
                            <li>
                              <Link to="#">Discover Talent</Link>
                            </li>
                            <li>
                              <Link to="dashboard-packages.html">Packages</Link>
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
                              <Link to="about.html">About</Link>
                            </li>
                            <li>
                              <Link to="contact.html">Contact</Link>
                            </li>
                            <li>
                              <Link to="faqs.html">FAQ</Link>
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
                              <Link to="courses-allcourse.html">
                                All courses
                              </Link>
                            </li>
                            <li>
                              <Link to="course-enrolled.html">My courses</Link>
                            </li>
                            <li>
                              <Link to="completedcourses.html">
                                Completed Courses
                              </Link>
                            </li>
                            <li>
                              <Link to="SkillAssesmentdashboard.html">
                                Skill Assessment
                              </Link>
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
                  © 2021 <Link to="#">Superio</Link>. All Right Reserved.
                </div>
                <div className="social-links">
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
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
      {/*Google Map APi Key*/}
      {/*End Google Map APi*/}
    </>
  );
};

export default ApplyJob;
