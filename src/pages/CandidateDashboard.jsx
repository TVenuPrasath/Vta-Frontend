import React from "react";
import TemporaryDrawer from "./SideBar";

const CandidateDashboard = () => {
  return (
    <>
      <div className="page-wrapper dashboard">
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
                    <a href="">
                      <img
                        src="images/VTA-logo.png"
                        style={{ width: "60%", marginBottom: 5 }}
                        alt="logo"
                        title=""
                      />
                    </a>
                  </div>
                </div>
                <nav className="nav main-menu">
                  <ul className="navigation" id="navbar">
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
                            <a href="tel:1234567890">
                              1 (314) 732 0300 <br />
                              +91 96000 85988
                            </a>
                          </span>
                          <span className="address">
                            Akshaya HQ, Rajiv Gandhi Salai, Kazhipattur,
                            <br />
                            Tamil Nadu, Chennai - 603103, India.
                          </span>
                          <span className="address">
                            1401, 21st ST STE 6310,
                            <br />
                            Sacramento, CA 95811, USA.
                          </span>
                          <a
                            href="mailto:support@infoziant.com"
                            className="email"
                          >
                            support@infoziant.com
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
                <button
                  className="menu-btn-1"
                  onclick="notifyToggleAppliedJob()"
                >
                  <span className="icon la la-bell" />
                </button>
                {/* Dashboard Option */}
                <div className="dropdown dashboard-option">
                  <a
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="images/resource/company-6.png"
                      alt="avatar"
                      className="thumb"
                    />
                    <span className="name">My Account</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="account.html">
                        <i className="fa fa-cog" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="la la-sign-out" />
                        Logout
                      </a>
                    </li>
                  </ul>
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
                <button id="toggle-user-sidebar">
                  <img
                    src="images/resource/company-6.png"
                    alt="avatar"
                    className="thumb"
                  />
                </button>
                <TemporaryDrawer />
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <div id="nav-mobile" />
        </header>
        {/* notification box */}
        <div className="notify" id="notify-2">
          <div className="col-lg-5">
            <div className="notification-widget ls-widget">
              <div className="widget-title">
                <h4>Notifications</h4>
              </div>
              <div className="widget-content">
                <ul className="notification-list">
                  <li>
                    <span className="icon flaticon-briefcase" />{" "}
                    <strong>Wade Warren</strong> applied for a job{" "}
                    <span className="colored">Web Developer</span>
                  </li>
                  <li>
                    <span className="icon flaticon-briefcase" />{" "}
                    <strong>Henry Wilson</strong> applied for a job{" "}
                    <span className="colored">Senior Product Designer</span>
                  </li>
                  <li className="success">
                    <span className="icon flaticon-briefcase" />{" "}
                    <strong>Raul Costa</strong> applied for a job{" "}
                    <span className="colored">Product Manager, Risk</span>
                  </li>
                  <li>
                    <span className="icon flaticon-briefcase" />{" "}
                    <strong>Jack Milk</strong> applied for a job{" "}
                    <span className="colored">Technical Architect</span>
                  </li>
                  <li className="success">
                    <span className="icon flaticon-briefcase" />{" "}
                    <strong>Michel Arian</strong> applied for a job{" "}
                    <span className="colored">Software Engineer</span>
                  </li>
                  <li>
                    <span className="icon flaticon-briefcase" />{" "}
                    <strong>Ali Tufan</strong> applied for a job{" "}
                    <span className="colored">UI Designer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*End Main Header */}
        {/* Sidebar Backdrop */}
        <div className="sidebar-backdrop" />
        {/* User Sidebar */}
        <div className="user-sidebar">
          <div className="sidebar-inner">
            <ul className="navigation">
              <li className="active">
                <a href="candidate-dashboard.html">
                  {" "}
                  <i className="la la-home" /> Dashboard
                </a>
              </li>
              <li>
                <a href="candidate-dashboard-profile.html">
                  <i className="la la-user-tie" />
                  My Profile
                </a>
              </li>
              <li>
                <a href="candidate-dashboard-resume.html">
                  <i className="la la-file-invoice" />
                  My Resume
                </a>
              </li>
              <li>
                <a href="candidate-dashboard-applied-job.html">
                  <i className="la la-briefcase" /> Applied Jobs{" "}
                </a>
              </li>
              <li>
                <a href="candidate-dashboard-job-alerts.html">
                  <i className="la la-bell" />
                  Job Alerts
                </a>
              </li>
              <li>
                <a href="candidate-inbox.html">
                  <i className="fa-light fa-envelope" /> Messages
                </a>
              </li>
              <li>
                <a href="candidate-dashboard-shortlisted-resume.html">
                  <i className="la la-bookmark-o" />
                  Shortlisted Jobs
                </a>
              </li>
              <li>
                <a href="candidate-dashboard-cv-manager.html">
                  <i className="la la-file-invoice" /> CV manager
                </a>
              </li>
              <li>
                <a href="sme-connect.html">
                  <i className="fa-light fa-network-wired" />
                  SME Connect
                </a>
              </li>
              <li>
                <a href="candidate-support.html">
                  <i className="fa-light fa-circle-question" />
                  Support
                </a>
              </li>
              <li>
                <a href="candidate-changepassword.html">
                  <i className="la la-lock" />
                  Change Password
                </a>
              </li>
              {/* <li><a href="dashboard-profile.html"><i class="la la-user-alt"></i>View Profile</a></li> */}
              <li>
                <a href="index.html">
                  <i className="la la-sign-out" />
                  Logout
                </a>
              </li>
              <li>
                <a onclick="showCandModal()">
                  <i className="la la-trash" />
                  Delete Profile
                </a>
              </li>
            </ul>
            <div className="skills-percentage">
              <h4>Skills Percentage</h4>
              <p>
                Put value for "Cover Image" field to increase your skill up to
                "85%"
              </p>
              {/* Pie Graph */}
              <div className="pie-graph">
                <div className="graph-outer">
                  <input
                    type="text"
                    className="dial"
                    data-fgcolor="#7367F0"
                    data-bgcolor="transparent"
                    data-width={234}
                    data-height={234}
                    data-linecap="normal"
                    defaultValue={30}
                  />
                  <div className="inner-text count-box">
                    <span
                      className="count-text txt"
                      data-stop={30}
                      data-speed={2000}
                    />
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End User Sidebar */}
        {/* 4 boxes */}
        <div className="box-head">
          <h2 style={{ fontWeight: 3000 }}>Find the perfect job for you</h2>
          <section className="boxes-section">
            <div className="box pastel-blue">
              <div className="flash box-content">
                <i className="fas fa-lightbulb" id="box-icon-1" />
                <a href="courses.html">
                  <h3>Learn &amp; Assess</h3>
                </a>
              </div>
              <div className="shapes">
                <div className="shape circle" />
                <div className="shape circle1" />
                <div className="shape circle2" />
              </div>
            </div>
            <div className="box pastel-pink">
              <div className="box-content">
                <i className="fa-solid fa-magnifying-glass" id="box-icon-2" />
                <a href="jobs">
                  <h3>Discover Openings</h3>
                </a>
              </div>
              <div className="shapes">
                <div className="shape circle" />
                <div className="shape circle1" />
                <div className="shape circle2" />
              </div>
            </div>
            <div className="box pastel-green">
              <a href="sme-connect.html"></a>
              <div className="box-content">
                <a href="sme-connect.html">
                  <i className="fa-solid fa-chalkboard-user" id="box-icon-3" />
                </a>
                <a href="sme-connect.html">
                  <h3>Expert Guidance</h3>
                </a>
              </div>
              <div className="shapes">
                <div className="shape circle" />
                <div className="shape circle1" />
                <div className="shape circle2" />
              </div>
            </div>
            <div className="box pastel-yellow">
              <a href="SkillAssesmentdashboard.html">
                <div className="box-content">
                  <i className="fa-solid fa-clipboard-check" id="box-icon-4" />
                  <h3>Skill Assessment</h3>
                </div>
              </a>
              <div className="shapes">
                <div className="shape circle" />
                <div className="shape circle1" />
                <div className="shape circle2" />
              </div>
            </div>
          </section>
          {/* job recommendation section */}
          <section className="job-recommendation">
            <div className="rcmnd-section">
              <h3 style={{ fontWeight: 3000 }}>Recommended jobs for you</h3>
              <div className="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand rcmnd-slider">
                <ul className="slider-container py-4" id="slider2">
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-10.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Python Developer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Dymax</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-1.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Software Developer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Virtusa</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-2.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Sales Executive</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Aspire</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-3.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>React developer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Keenan</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-4.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Software Engineer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Amazon</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-5.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Python Developer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Swipelah</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-6.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Software Developer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Oro</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-7.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Backend Developer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Techmango</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="card shadow h-100 rcmd-card">
                      <ul className="rcmd-ul-1">
                        <li className="job-logo">
                          <img src="images/clients/1-8.png" />
                        </li>
                        <li>
                          <p>2d ago</p>
                        </li>
                      </ul>
                      <a href="job-single.html">
                        <h6>Android Developer</h6>
                      </a>
                      <ul className="rcmd-ul-1">
                        <li>Aptivo</li>
                        <li>
                          <span>⭐</span> 4.5
                        </li>
                      </ul>
                      <p>
                        <span className="icon flaticon-map-locator" /> London,
                        UK
                      </p>
                    </div>
                  </li>
                </ul>
                <button
                  type="button"
                  className="slider-nav"
                  aria-label="Go to previous"
                />
                <button
                  type="button"
                  className="slider-nav slider-nav-next"
                  aria-label="Go to next"
                />
              </div>
            </div>
          </section>
        </div>
        {/* Dashboard */}
        <section className="user-dashboard">
          <div className="dashboard-outer">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="ui-item">
                  <div className="left">
                    <i className="icon flaticon-briefcase" />
                  </div>
                  <a href="candidate-dashboard-applied-job.html">
                    <div className="right">
                      <h4>22</h4>
                      <p>Applied Jobs</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="ui-item ui-red">
                  <div className="left">
                    <i className="icon la la-file-invoice" />
                  </div>
                  <a href="candidate-dashboard-job-alerts.html">
                    <div className="right">
                      <h4>9382</h4>
                      <p>Job Alerts</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="ui-item ui-yellow">
                  <div className="left">
                    <i className="icon la la-comment-o" />
                  </div>
                  <a href="candidate-inbox.html">
                    <div className="right">
                      <h4>74</h4>
                      <p>Messages</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="ui-item ui-green">
                  <div className="left">
                    <i className="icon la la-bookmark-o" />
                  </div>
                  <a href="candidate-dashboard-shortlisted-resume.html">
                    <div className="right">
                      <h4>32</h4>
                      <p>Shortlist</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* applicants Widget */}
                <div className="applicants-widget ls-widget">
                  <div className="widget-title">
                    <h4>Jobs Applied Recently</h4>
                  </div>
                  <div className="widget-content">
                    <div className="row">
                      {/* Job Block */}
                      <div className="job-block col-lg-6 col-md-12 col-sm-12">
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
                      <div className="job-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                src="images/resource/company-logo/1-2.png"
                                alt=""
                              />
                            </span>
                            <h4>
                              <a href="job-single.html">
                                Recruiting Coordinator
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
                      <div className="job-block col-lg-6 col-md-12 col-sm-12">
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
                      {/* Job Block */}
                      <div className="job-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                src="images/resource/company-logo/1-4.png"
                                alt=""
                              />
                            </span>
                            <h4>
                              <a href="job-single.html">
                                Senior Product Designer
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
                      <div className="job-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                src="images/resource/company-logo/1-5.png"
                                alt=""
                              />
                            </span>
                            <h4>
                              <a href="job-single.html">
                                Senior Full Stack Engineer, Creator Success
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
                      <div className="job-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                src="images/resource/company-logo/1-6.png"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Dashboard */}
        {/* Copyright */}
        <div className="copyright-text">
          <p>
            ©<span id="year" /> VTA. All Right Reserved.
          </p>
        </div>
      </div>
      {/* End Page Wrapper */}
      {/* modal box for delete candidate */}
      <div id="myModal-cand" className="modal-cand">
        <div className="modal-content-cand">
          <span className="close-btn-cand" onclick="closeCandModal()">
            ×
          </span>
          <br />
          <h5>Are you sure want to delete your profile ?</h5>
          <br />
          <div className="delete_actions">
            <button
              className="cancel"
              id="cancelBtn-1"
              onclick="closeCandModal()"
            >
              Delete
            </button>
            <button
              className="delete"
              id="cancelBtnNo-1"
              onclick="closeCandModal()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* Notification container */}
      <div id="notification" className="notification">
        Job saved successfully!
      </div>
      {/* Chart.js // documentation: http://www.chartjs.org/docs/latest/ */}
    </>
  );
};

export default CandidateDashboard;
