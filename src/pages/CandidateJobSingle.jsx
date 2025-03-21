import axios from "axios";
import React, { useEffect, useState } from "react";
import TemporaryDrawer from "./SideBar";
import { Link, useParams } from "react-router-dom";

const CandidateJobSingle = () => {
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
            {/* Nav Outer */}
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <img
                    src="/images/VTA-logo.png"
                    style={{ width: "60%", marginBottom: 5 }}
                    alt="logo"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  <li className="mm-add-listing">
                    <Link to="/add-listing" className="theme-btn btn-style-one">
                      Job Post
                    </Link>
                    <span>
                      <span className="contact-info">
                        <span className="phone-num">
                          <span>Call us</span>
                          <a href="tel:1234567890">123 456 7890</a>
                        </span>
                        <span className="address">
                          329 Queensberry Street, North Melbourne VIC <br />
                          3051, Australia.
                        </span>
                        <a
                          href="mailto:support@Infoziant.com"
                          className="email"
                        >
                          support@Infoziant.com
                        </a>
                      </span>

                      {/* Social Links */}
                      {/* <span className="social-links">
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
                    </span> */}
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Outer Box */}
            <div className="outer-box">
              <Link to="/candidate-dashboard-cv-manager" className="upload-cv">
                Upload your CV
              </Link>

              {/* Login/Register and Job Post Buttons */}
              <div className="btn-box">
                <Link to="/login" className="theme-btn btn-style-three">
                  <span style={{ color: "white" }}>Login / Register</span>
                </Link>
                <Link
                  to="/dashboard-post-job"
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
              <Link to="/">
                <img src="/images/VTA.png" alt="VTA Logo" />
              </Link>
            </div>

            {/* Mobile Nav Box */}
            <div className="nav-outer clearfix">
              <div className="outer-box">
                <div className="login-box">
                  <Link to="/login">
                    <span className="icon-user" />
                  </Link>
                </div>
              </div>
              <TemporaryDrawer />
            </div>
          </div>

          {/* Mobile Nav */}
          <div id="nav-mobile" />
        </header>
        {/*End Main Header */}
        {/* Job Detail Section */}
        <section className="job-detail-section">
          {/* Upper Box */}
          <div className="upper-box">
            <div className="auto-container">
              {/* Job Block */}
              <div className="job-block-seven">
                <div className="inner-box">
                  <div className="content">
                    <span className="company-logo">
                      <img src={job.CompanyLogo || ""} alt="" />
                    </span>
                    <h4>{job.title}</h4>
                    <ul className="job-info">
                      <li>
                        <span className="icon flaticon-briefcase" /> Segment
                      </li>
                      <li>
                        <span className="icon flaticon-map-locator" />
                        {job.location}
                      </li>
                      <li>
                        <span className="icon flaticon-clock-3" />
                        {new Date(job.updatedAt).toLocaleString()}
                      </li>
                      <li>
                        <span className="icon flaticon-money" />
                        {job.minSalary}LPA - {job.maxSalary}LPA
                      </li>
                    </ul>
                    <ul className="job-other-info">
                      <li className="time">{job.jobType}</li>
                      <li className="privacy">Private</li>
                      <li className="required">Urgent</li>
                    </ul>
                  </div>
                  <div className="btn-box">
                    <Link
                      to={`/ApplyJob/${jobId}`}
                      className="theme-btn btn-style-one"
                    >
                      Apply For Job
                    </Link>
                    <button className="bookmark-btn">
                      <i className="flaticon-bookmark" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job-detail-outer">
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-8 col-md-12 col-sm-12">
                  <div className="job-detail">
                    <h4>Job Description</h4>
                    <p>
                      As a Product Designer, you will work within a Product
                      Delivery Team fused with UX, engineering, product and data
                      talent. You will help the team design beautiful interfaces
                      that solve business challenges for our clients. We work
                      with a number of Tier 1 banks on building web-based
                      applications for AML, KYC and Sanctions List management
                      workflows. This role is ideal if you are looking to segue
                      your career into the FinTech or Big Data arenas.
                    </p>
                    <h4>Key Responsibilities</h4>
                    <ul className="list-style-three">
                      {job.keyResponsibilities.map((resp) => {
                        return <li key={resp}>{resp}</li>;
                      })}
                    </ul>
                    <h4>Skill &amp; Experience</h4>
                    <ul className="list-style-three">
                      {job.skillsAndExperienceRequired.map((skill) => {
                        return <li key={skill}>{skill}</li>;
                      })}
                    </ul>
                  </div>
                  {/* Other Options */}
                  <div className="other-options">
                    <div className="social-share">
                      <h5>Share this job</h5>
                      <Link to="#" className="facebook">
                        <i className="fab fa-facebook-f" /> Facebook
                      </Link>
                      <Link to="#" className="twitter">
                        <i className="fab fa-twitter" /> Twitter
                      </Link>
                      <Link tof="#" className="google">
                        <i className="fab fa-google" /> Google+
                      </Link>
                    </div>
                  </div>
                  {/* Related Jobs */}
                  <div className="related-jobs">
                    <div className="title-box">
                      <h3>Related Jobs</h3>
                      <div className="text">
                        2020 jobs live - 293 added today.
                      </div>
                    </div>
                    {/* Job Block */}
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <img
                              src="images/resource/company-logo/1-1.png"
                              alt=""
                            />
                          </span>
                          <h4>
                            <a href="job-single.html">
                              Software Engineer (Android), Libraries
                            </a>
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase" />{" "}
                              Segment
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator" />{" "}
                              London, UK
                            </li>
                            <li>
                              <span className="icon flaticon-clock-3" /> 11
                              hours ago
                            </li>
                            <li>
                              <span className="icon flaticon-money" /> $35k -
                              $45k
                            </li>
                          </ul>
                          <ul className="job-other-info">
                            <li className="time">Full Time</li>
                            <li className="privacy">Private</li>
                            <li className="required">Urgent</li>
                          </ul>
                          <button className="bookmark-btn">
                            <span className="flaticon-bookmark" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Job Block */}
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <img
                              src="images/resource/company-logo/1-2.png"
                              alt=""
                            />
                          </span>
                          <h4>
                            <a href="job-single.html">Recruiting Coordinator</a>
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase" />{" "}
                              Segment
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator" />{" "}
                              London, UK
                            </li>
                            <li>
                              <span className="icon flaticon-clock-3" /> 11
                              hours ago
                            </li>
                            <li>
                              <span className="icon flaticon-money" /> $35k -
                              $45k
                            </li>
                          </ul>
                          <ul className="job-other-info">
                            <li className="time">Full Time</li>
                            <li className="privacy">Private</li>
                            <li className="required">Urgent</li>
                          </ul>
                          <button className="bookmark-btn">
                            <span className="flaticon-bookmark" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Job Block */}
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <img
                              src="images/resource/company-logo/1-3.png"
                              alt=""
                            />
                          </span>
                          <h4>
                            <a href="job-single.html">
                              Product Manager, Studio
                            </a>
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase" />{" "}
                              Segment
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator" />{" "}
                              London, UK
                            </li>
                            <li>
                              <span className="icon flaticon-clock-3" /> 11
                              hours ago
                            </li>
                            <li>
                              <span className="icon flaticon-money" /> $35k -
                              $45k
                            </li>
                          </ul>
                          <ul className="job-other-info">
                            <li className="time">Full Time</li>
                            <li className="privacy">Private</li>
                            <li className="required">Urgent</li>
                          </ul>
                          <button className="bookmark-btn">
                            <span className="flaticon-bookmark" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar">
                    <div className="sidebar-widget">
                      {/* Job Overview */}
                      <h4 className="widget-title">Job Overview</h4>
                      <div className="widget-content">
                        <ul className="job-overview">
                          <li>
                            <i className="icon icon-calendar" />
                            <h5>Date Posted:</h5>
                            <span>
                              {new Date(job.updatedAt).toLocaleString()}
                            </span>
                          </li>
                          <li>
                            <i className="icon icon-expiry" />
                            <h5>Expiration date:</h5>
                            <span>
                              {new Date(
                                job.applicationDeadline
                              ).toLocaleString()}
                            </span>
                          </li>
                          <li>
                            <i className="icon icon-location" />
                            <h5>Location:</h5>
                            <span>{job.location}</span>
                          </li>
                          <li>
                            <i className="icon icon-user-2" />
                            <h5>Job Title:</h5>
                            <span>{job.title}</span>
                          </li>
                          <li>
                            <i className="icon icon-clock" />
                            <h5>Hours:</h5>
                            <span>{job.workHours}</span>
                          </li>
                          <li>
                            <i className="icon icon-rate" />
                            <h5>Rate:</h5>
                            <span>$15 - $25 / hour</span>
                          </li>
                          <li>
                            <i className="icon icon-salary" />
                            <h5>Salary:</h5>
                            <span>
                              {job.minSalary}LPA - {job.maxSalary}LPA
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* Map Widget */}
                      <h4 className="widget-title">Job Location</h4>
                      <div className="widget-content">
                        <div className="map-outer">
                          <div
                            className="map-canvas"
                            data-zoom={12}
                            data-lat="-37.817085"
                            data-lng="144.955631"
                            data-type="roadmap"
                            data-hue="#ffc400"
                            data-title="Envato"
                            data-icon-path="images/resource/map-marker.png"
                            data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
                          ></div>
                        </div>
                      </div>
                      {/* Job Skills */}
                      <h4 className="widget-title">Job Skills</h4>
                      <div className="widget-content">
                        <ul className="job-skills">
                          {job.skills.map((skill) => {
                            return <li key={skill}>{skill}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget company-widget">
                      <div className="widget-content">
                        <div className="company-title">
                          <div className="company-logo">
                            <img src="/images/resource/company-7.png" alt="" />
                          </div>
                          <h5 className="company-name">InVision</h5>
                          <Link to="#" className="profile-link">
                            View company profile
                          </Link>
                        </div>
                        <ul className="company-info">
                          <li>
                            Primary industry: <span>Software</span>
                          </li>
                          <li>
                            Company size: <span>501-1,000</span>
                          </li>
                          <li>
                            Founded in: <span>2011</span>
                          </li>
                          <li>
                            Phone: <span>123 456 7890</span>
                          </li>
                          <li>
                            Email: <span>info@joio.com</span>
                          </li>
                          <li>
                            Location: <span>London, UK</span>
                          </li>
                          <li>
                            Social media:
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
                          </li>
                        </ul>
                        <div className="btn-box">
                          <Link to="#" className="theme-btn btn-style-three">
                            www.invisionapp.com
                          </Link>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Job Detail Section */}
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
                        <img src="images/VTA.png" alt="" />
                      </Link>
                    </div>
                    <p className="phone-num">
                      <span>Call us </span>
                      <Link to="thebeehost@support.com">
                        1 (314) 732 0300 <br />
                        +91 96000 85988
                      </Link>
                    </p>
                    <p className="address">
                      Akshaya HQ, Rajiv Gandhi Salai, Kazhipattur,
                      <br />
                      Tamil Nadu, Chennai - 603103, India.
                      <br />
                      1401, 21st ST STE 6310,
                      <br />
                      Sacramento, CA 95811, USA.
                      <br />
                      <Link to="mailto:support@superio.com" className="email">
                        support@infoziant.com
                      </Link>
                    </p>
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
                              <Link tp="candidate-dashboard-resume.html">
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
                  © 2024 <Link to="#">VTA</Link>. All Right Reserved.
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
      {/* Notification container */}
      <div id="notification" className="notification">
        Job saved successfully!
      </div>
      {/*Google Map APi Key*/}
      {/*End Google Map APi*/}
    </>
  );
};

export default CandidateJobSingle;
