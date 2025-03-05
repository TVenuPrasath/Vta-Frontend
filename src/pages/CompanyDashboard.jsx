import React from "react";
import { Navigate } from "react-router-dom";

const CompanyDashboard = () => {
  return (
    <div className="page-wrapper dashboard ">
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
                      src="images/VTA.png"
                      width={154}
                      height={50}
                      alt=""
                      title=""
                    />
                  </a>
                </div>
              </div>
              {/* Main Menu End*/}
            </div>
            <div className="outer-box">
              <button className="menu-btn-1" onclick="notifyToggleAppliedJob()">
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
                src="images/VTA.png"
                alt=""
                width={154}
                height={50}
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
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div id="nav-mobile" />
      </header>
      {/*End Main Header */}
      {/* Sidebar Backdrop */}
      <div className="sidebar-backdrop" />
      {/* User Sidebar */}
      <div className="user-sidebar">
        <div className="sidebar-inner">
          <ul className="navigation">
            <li className="active">
              <a href="dashboard.html">
                {" "}
                <i className="la la-home" /> Dashboard
              </a>
            </li>
            <li>
              <a href="dashboard-company-profile.html">
                <i className="la la-user-tie" />
                Company Profile
              </a>
            </li>
            <li>
              <a href="dashboard-post-job.html">
                <i className="la la-paper-plane" />
                Post a New Job
              </a>
            </li>
            <li>
              <a href="dashboard-manage-job.html">
                <i className="la la-briefcase" /> Manage Jobs{" "}
              </a>
            </li>
            <li>
              <a href="dashboard-applicants.html">
                <i className="la la-file-invoice" /> All Applicants
              </a>
            </li>
            <li>
              <a href="dashboard-resumes.html">
                <i className="la la-bookmark-o" />
                Shortlisted Resumes
              </a>
            </li>
            <li>
              <a href="dashboard-packages.html">
                <i className="la la-box" />
                Packages
              </a>
            </li>
            <li>
              <a href="candidate-inbox.html">
                <i className="la la-comment-o" />
                Messages
              </a>
            </li>
            <li>
              <a href="scheduled-meetings.html">
                <i className="fa-light fa-calendar-days" />
                Scheduled Interviews
              </a>
            </li>
            <li>
              <a href="dashboard-change-password.html">
                <i className="la la-lock" />
                Change Password
              </a>
            </li>
            <li>
              <a href="employers-single.html">
                <i className="la la-user-alt" />
                View Profile
              </a>
            </li>
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
        </div>
      </div>
      {/* End User Sidebar */}
      {/* dasgboard 1 */}
      <div className="box-head">
        <h2>Hiring Candidate With Ease!</h2>
        <section className="boxes-section" style={{ padding: "0%" }}>
          <a href="dashboard-post-job.html"></a>
          <div className="box pastel-blue">
            <a href="dashboard-post-job.html">
              <div className="flash box-content">
                <img src="images/icons/post_add.png" />
                <h3>Post a Job</h3>
              </div>
            </a>
            <div className="shapes">
              {/* Add shapes in the background */}
              <div className="shape circle" />
              <div className="shape triangle" />
            </div>
          </div>
          <a href="candidates.html"></a>
          <div className="box pastel-pink">
            <a href="candidates.html">
              <div className="box-content">
                {/* <i class="fa-solid fa-magnifying-glass" id="box-icon-2"></i> */}
                {/* <i class="fas fa-cogs" id="box-icon-2"></i> */}
                <img src="images/icons/person_search.png" alt="" />
                <h3>Discover Talent</h3>
              </div>
            </a>
            <div className="shapes">
              <div className="shape circle" />
              <div className="shape square" />
            </div>
          </div>
          <a href="pricing.html"></a>
          <div className="box pastel-green">
            <a href="pricing.html">
              <div className="box-content">
                <img src="images/icons/workspace_premium.png" />
                <h3>Go Premium</h3>
              </div>
            </a>
            <div className="shapes">
              <div className="shape circle" />
              <div className="shape hexagon" />
            </div>
          </div>
          <a href="pricing.html"></a>
          <div className="box pastel-green">
            <a href="EmployerRegister">
              <div className="box-content">
                <img src="images/icons/person_search.png" />
                <h3>Add Recruiter</h3>
              </div>
            </a>
            <div className="shapes">
              <div className="shape circle" />
              <div className="shape hexagon" />
            </div>
          </div>
        </section>
        {/* Dashboard */}
        <section className="user-dashboard" style={{ padding: "0%" }}>
          <div className="dashboard-outer">
            <div className="row">
              <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="ui-item">
                  <div className="left">
                    <i className="icon flaticon-briefcase" />
                  </div>
                  <a href="dashboard-manage-job.html">
                    <div className="right">
                      <h4>22</h4>
                      <p>Posted Jobs</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="ui-item ui-red">
                  <div className="left">
                    <i className="icon la la-file-invoice" />
                  </div>
                  <a href="dashboard-applicants.html">
                    <div className="right">
                      <h4>9382</h4>
                      <p>Application</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
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
              <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="ui-item ui-green">
                  <div className="left">
                    <i className="icon la la-bookmark-o" />
                  </div>
                  <a href="dashboard-resumes.html">
                    <div className="right">
                      <h4>32</h4>
                      <p>Shortlist</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px 45px 10px 0px",
                }}
              >
                Best Fit Candidates
              </h2>
              <div className="row">
                <div className="col-xl-4 col-lg-12">
                  {/* Graph widget */}
                  <div
                    className="graph-widget ls-widget"
                    style={{ paddingBottom: 8 }}
                  >
                    <div className="tabs-box">
                      <div className="widget-title">
                        {/* <h4>Your Profile Views</h4> */}
                        <div className="chosen-outer">
                          {/*Tabs Box*/}
                          <select className="chosen-select">
                            <option>Full stack Developer</option>
                            <option>Python Developer</option>
                            <option>Product Manager</option>
                            <option>UI/UX Designer</option>
                            <option>Game Developer</option>
                          </select>
                        </div>
                      </div>
                      <div className="widget-content">
                        {/* Left side Top candidate */}
                        <div onclick="showCandidate('candidate1')">
                          <div className="candidate-block-four at-v7 col-lg-12 col-md-3">
                            {/* Candidate Block */}
                            <div className="inner-box text-start">
                              <div className="d-flex align-items-center">
                                <span className="thumb mx-0">
                                  <img
                                    src="images/resource/candidate-1.png"
                                    alt=""
                                  />
                                </span>
                                <div className="ml15">
                                  <h3 className="name">Floyd Miles</h3>
                                  <span className="cat">
                                    Full stack Developer
                                  </span>
                                </div>
                              </div>
                              <ul className="job-info justify-content-start at-clv7 mt-2">
                                <li className="ms-0">
                                  <span className="icon fal fa-location-dot" />{" "}
                                  London, UK
                                </li>
                                <li className="mx-0 ps-2">
                                  <span className="fas fa-star review-color" />{" "}
                                  4.5 (8 Reviews)
                                </li>
                              </ul>
                              <div className="d-grid">
                                <div
                                  className="progress"
                                  style={{ height: 25 }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    90%
                                  </div>
                                </div>
                                <div className="option-icons">
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <a
                                          href="candidates-single.html"
                                          data-text="View application"
                                        >
                                          <span className="la la-eye" />
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Approval-1"
                                          data-text="Approve Application"
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Reject-1"
                                          data-text="Reject Application"
                                        >
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-1"
                                          className="delete-btn-1"
                                          data-id={1}
                                          data-text="Delete Application"
                                        >
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onclick="showCandidate('candidate2')">
                          <div className="candidate-block-four at-v7 col-lg-12 col-md-3">
                            {/* Candidate Block */}
                            <div className="inner-box text-start">
                              <div className="d-flex align-items-center">
                                <span className="thumb mx-0">
                                  <img
                                    src="images/resource/candidate-2.png"
                                    alt=""
                                  />
                                </span>
                                <div className="ml15">
                                  <h3 className="name">Darrell Steward</h3>
                                  <span className="cat">
                                    Full stack Developer
                                  </span>
                                </div>
                              </div>
                              <ul className="job-info justify-content-start at-clv7 mt-2">
                                <li className="ms-0">
                                  <span className="icon fal fa-location-dot" />{" "}
                                  London, UK
                                </li>
                                <li className="mx-0 ps-2">
                                  <span className="fas fa-star review-color" />{" "}
                                  4.5 (8 Reviews)
                                </li>
                              </ul>
                              <div className="d-grid">
                                <div
                                  className="progress"
                                  style={{ height: 25 }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    80%
                                  </div>
                                </div>
                                <div className="option-icons">
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <a
                                          href="candidates-single.html"
                                          data-text="View application"
                                        >
                                          <span className="la la-eye" />
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Approval-1"
                                          data-text="Approve Application"
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Reject-1"
                                          data-text="Reject Application"
                                        >
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-1"
                                          className="delete-btn-1"
                                          data-id={1}
                                          data-text="Delete Application"
                                        >
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onclick="showCandidate('candidate3')">
                          <div className="candidate-block-four at-v7 col-lg-12 col-md-3">
                            {/* Candidate Block */}
                            <div className="inner-box text-start">
                              <div className="d-flex align-items-center">
                                <span className="thumb mx-0">
                                  <img
                                    src="images/resource/candidate-3.png"
                                    alt=""
                                  />
                                </span>
                                <div className="ml15">
                                  <h3 className="name">Brooklyn Simmons</h3>
                                  <span className="cat">
                                    Full stack Developer
                                  </span>
                                </div>
                              </div>
                              <ul className="job-info justify-content-start at-clv7 mt-2">
                                <li className="ms-0">
                                  <span className="icon fal fa-location-dot" />{" "}
                                  London, UK
                                </li>
                                <li className="mx-0 ps-2">
                                  <span className="fas fa-star review-color" />{" "}
                                  4.0 (4 Reviews)
                                </li>
                              </ul>
                              <div className="d-grid">
                                <div
                                  className="progress"
                                  style={{ height: 25 }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    60%
                                  </div>
                                </div>
                                <div className="option-icons">
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <a
                                          href="candidates-single.html"
                                          data-text="View application"
                                        >
                                          <span className="la la-eye" />
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Approval-1"
                                          data-text="Approve Application"
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Reject-1"
                                          data-text="Reject Application"
                                        >
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-1"
                                          className="delete-btn-1"
                                          data-id={1}
                                          data-text="Delete Application"
                                        >
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onclick="showCandidate('candidate4')">
                          <div className="candidate-block-four at-v7 col-lg-12 col-md-3">
                            {/* Candidate Block */}
                            <div className="inner-box text-start">
                              <div className="d-flex align-items-center">
                                <span className="thumb mx-0">
                                  <img
                                    src="images/resource/candidate-4.png"
                                    alt=""
                                  />
                                </span>
                                <div className="ml15">
                                  <h3 className="name">Jane Cooper</h3>
                                  <span className="cat">
                                    Full stack Developer
                                  </span>
                                </div>
                              </div>
                              <ul className="job-info justify-content-start at-clv7 mt-2">
                                <li className="ms-0">
                                  <span className="icon fal fa-location-dot" />{" "}
                                  London, UK
                                </li>
                                <li className="mx-0 ps-2">
                                  <span className="fas fa-star review-color" />{" "}
                                  3.7 (4 Reviews)
                                </li>
                              </ul>
                              <div className="d-grid">
                                <div
                                  className="progress"
                                  style={{ height: 25 }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "40%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    40%
                                  </div>
                                </div>
                                <div className="option-icons">
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <a
                                          href="candidates-single.html"
                                          data-text="View application"
                                        >
                                          <span className="la la-eye" />
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Approval-1"
                                          data-text="Approve Application"
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Reject-1"
                                          data-text="Reject Application"
                                        >
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-1"
                                          className="delete-btn-1"
                                          data-id={1}
                                          data-text="Delete Application"
                                        >
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onclick="showCandidate('candidate5')">
                          <div className="candidate-block-four at-v7 col-lg-12 col-md-3">
                            {/* Candidate Block */}
                            <div className="inner-box text-start">
                              <div className="d-flex align-items-center">
                                <span className="thumb mx-0">
                                  <img
                                    src="images/resource/candidate-5.png"
                                    alt=""
                                  />
                                </span>
                                <div className="ml15">
                                  <h3 className="name">Jane Cooper</h3>
                                  <span className="cat">
                                    Full stack Developer
                                  </span>
                                </div>
                              </div>
                              <ul className="job-info justify-content-start at-clv7 mt-2">
                                <li className="ms-0">
                                  <span className="icon fal fa-location-dot" />{" "}
                                  London, UK
                                </li>
                                <li className="mx-0 ps-2">
                                  <span className="fas fa-star review-color" />{" "}
                                  3.2 (5 Reviews)
                                </li>
                              </ul>
                              <div className="d-grid">
                                <div
                                  className="progress"
                                  style={{ height: 25 }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    30%
                                  </div>
                                </div>
                                <div className="option-icons">
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <a
                                          href="candidates-single.html"
                                          data-text="View application"
                                        >
                                          <span className="la la-eye" />
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Approval-1"
                                          data-text="Approve Application"
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Reject-1"
                                          data-text="Reject Application"
                                        >
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-1"
                                          className="delete-btn-1"
                                          data-id={1}
                                          data-text="Delete Application"
                                        >
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onclick="showCandidate('candidate6')">
                          <div className="candidate-block-four at-v7 col-lg-12 col-md-3">
                            {/* Candidate Block */}
                            <div className="inner-box text-start">
                              <div className="d-flex align-items-center">
                                <span className="thumb mx-0">
                                  <img
                                    src="images/resource/candidate-6.png"
                                    alt=""
                                  />
                                </span>
                                <div className="ml15">
                                  <h3 className="name">James</h3>
                                  <span className="cat">
                                    Full stack Developer
                                  </span>
                                </div>
                              </div>
                              <ul className="job-info justify-content-start at-clv7 mt-2">
                                <li className="ms-0">
                                  <span className="icon fal fa-location-dot" />{" "}
                                  London, UK
                                </li>
                                <li className="mx-0 ps-2">
                                  <span className="fas fa-star review-color" />{" "}
                                  3.0 (3 Reviews)
                                </li>
                              </ul>
                              <div className="d-grid">
                                <div
                                  className="progress"
                                  style={{ height: 25 }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    60%
                                  </div>
                                </div>
                                <div className="option-icons">
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <a
                                          href="candidates-single.html"
                                          data-text="View application"
                                        >
                                          <span className="la la-eye" />
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Approval-1"
                                          data-text="Approve Application"
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-Reject-1"
                                          data-text="Reject Application"
                                        >
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          id="openModalBtn-1"
                                          className="delete-btn-1"
                                          data-id={1}
                                          data-text="Delete Application"
                                        >
                                          <span className="la la-trash" />
                                        </button>
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
                  </div>
                </div>
                <div className="col-xl-8 col-lg-12">
                  {/* Notification Widget */}
                  <div className=" notification-widget ls-widget">
                    <div className="widget-title">
                      {/* <h4>Notifications</h4> */}
                    </div>
                    <div className="widget-content" style={{ height: 1920 }}>
                      <section className="candidate-detail-section style-three">
                        <div className="upper-box">
                          <div className="candidate-block-six">
                            <div className="inner-box">
                              <figure className="image">
                                <img
                                  id="candidate-image"
                                  src="images/resource/candidate-1.png"
                                  alt=""
                                />
                              </figure>
                              <h4 id="candidate-name" className="name">
                                Floyd Miles
                              </h4>
                              <span
                                id="candidate-designation"
                                className="designation"
                              >
                                Full Stack Developer
                              </span>
                              <div className="content">
                                <ul className="post-tags" id="candidate-tags">
                                  <li>
                                    <a href="#">MernStack</a>
                                  </li>
                                  <li>
                                    <a href="#">Django</a>
                                  </li>
                                  <li>
                                    <a href="#">webdevloper</a>
                                  </li>
                                </ul>
                                <ul className="candidate-info">
                                  <li>
                                    <span className="icon flaticon-map-locator" />
                                    <span id="candidate-location">
                                      London, UK
                                    </span>
                                  </li>
                                  <li className="mx-0 ps-2">
                                    <span className="fas fa-star review-color" />
                                    <span id="candidate-review">
                                      4.3 (6 Reviews)
                                    </span>
                                  </li>
                                </ul>
                                <div className="resume-summarise-button btn">
                                  <button
                                    id="candidate-resume"
                                    href="#"
                                    className="summarise-button theme-btn btn-style-one"
                                  >
                                    Download Resume
                                  </button>
                                  <button
                                    onclick="summaryCandidate(showCand)"
                                    id="candidate-summarise"
                                    href="#"
                                    className="summarise-button theme-btn btn-style-one"
                                  >
                                    Summarise Candidate
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div
                        id="candidate-detail-outer"
                        className="candidate-detail-outer"
                      >
                        <div>
                          <div className="row">
                            <div className="content-column col-lg-8 col-md-12 col-sm-12 order-2">
                              <div className="job-detail">
                                <h4 className="candidate-ab">
                                  Candidates About
                                </h4>
                                <p id="candidate-about" />
                                {/* Resume / Education */}
                                <div
                                  id="education-section"
                                  className="resume-outer"
                                />
                                {/* Resume / Work & Experience */}
                                <div
                                  id="experience-section"
                                  className="resume-outer theme-blue"
                                />
                              </div>
                            </div>
                            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                              <aside className="sidebar">
                                <div className="sidebar-widget">
                                  <ul className="job-overview">
                                    <li>
                                      <i className="icon icon-calendar" />
                                      <h5>Experience:</h5>
                                      <span id="candidate-experience" />
                                    </li>
                                    <li>
                                      <i className="icon icon-expiry" />
                                      <h5>Age:</h5>
                                      <span id="candidate-age" />
                                    </li>
                                    <li>
                                      <i className="icon icon-rate" />
                                      <h5>Current Salary:</h5>
                                      <span id="candidate-current-salary" />
                                    </li>
                                    <li>
                                      <i className="icon icon-salary" />
                                      <h5>Expected Salary:</h5>
                                      <span id="candidate-expected-salary" />
                                    </li>
                                    <li>
                                      <i className="icon icon-user-2" />
                                      <h5>Gender:</h5>
                                      <span id="candidate-gender" />
                                    </li>
                                    <li>
                                      <i className="icon icon-language" />
                                      <h5>Language:</h5>
                                      <span id="candidate-language" />
                                    </li>
                                    <li>
                                      <i className="icon icon-degree" />
                                      <h5>Education Level:</h5>
                                      <span id="candidate-education-level" />
                                    </li>
                                  </ul>
                                </div>
                                <div className="sidebar-widget">
                                  <h4 className="widget-title">
                                    Professional Skills
                                  </h4>
                                  <ul
                                    id="candidate-skills"
                                    className="job-skills"
                                  />
                                </div>
                              </aside>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                {/* applicants Widget */}
                <div className="applicants-widget ls-widget">
                  <div className="widget-title">
                    <h4>Recent Applicants</h4>
                  </div>
                  <div className="widget-content">
                    <div className="row">
                      {/* Candidate block three */}
                      <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image">
                              <img
                                src="images/resource/candidate-1.png"
                                alt=""
                              />
                            </figure>
                            <h4 className="name">
                              <a href="#">Darlene Robertson</a>
                            </h4>
                            <ul className="candidate-info">
                              <li className="designation">UI Designer</li>
                              <li>
                                <span className="icon flaticon-map-locator" />{" "}
                                London, UK
                              </li>
                              <li>
                                <span className="icon flaticon-money" /> $99 /
                                hour
                              </li>
                            </ul>
                            <ul className="post-tags">
                              <li>
                                <a href="#">App</a>
                              </li>
                              <li>
                                <a href="#">Design</a>
                              </li>
                              <li>
                                <a href="#">Digital</a>
                              </li>
                            </ul>
                          </div>
                          <div className="option-box">
                            <ul className="option-list">
                              <li>
                                <a
                                  href="candidates-single.html"
                                  data-text="View application"
                                >
                                  <span className="la la-eye" />
                                </a>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Approval-1"
                                  data-text="Approve Application"
                                >
                                  <span className="la la-check" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Reject-1"
                                  data-text="Reject Application"
                                >
                                  <span className="la la-times-circle" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-1"
                                  className="delete-btn-1"
                                  data-id={1}
                                  data-text="Delete Application"
                                >
                                  <span className="la la-trash" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Candidate block three */}
                      <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image">
                              <img
                                src="images/resource/candidate-2.png"
                                alt=""
                              />
                            </figure>
                            <h4 className="name">
                              <a href="#">Wade Warren</a>
                            </h4>
                            <ul className="candidate-info">
                              <li className="designation">UI Designer</li>
                              <li>
                                <span className="icon flaticon-map-locator" />{" "}
                                London, UK
                              </li>
                              <li>
                                <span className="icon flaticon-money" /> $99 /
                                hour
                              </li>
                            </ul>
                            <ul className="post-tags">
                              <li>
                                <a href="#">App</a>
                              </li>
                              <li>
                                <a href="#">Design</a>
                              </li>
                              <li>
                                <a href="#">Digital</a>
                              </li>
                            </ul>
                          </div>
                          <div className="option-box">
                            <ul className="option-list">
                              <li>
                                <a
                                  href="candidates-single.html"
                                  data-text="View application"
                                >
                                  <span className="la la-eye" />
                                </a>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Approval-1"
                                  data-text="Approve Application"
                                >
                                  <span className="la la-check" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Reject-1"
                                  data-text="Reject Application"
                                >
                                  <span className="la la-times-circle" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-1"
                                  className="delete-btn-1"
                                  data-id={1}
                                  data-text="Delete Application"
                                >
                                  <span className="la la-trash" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Candidate block three */}
                      <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image">
                              <img
                                src="images/resource/candidate-3.png"
                                alt=""
                              />
                            </figure>
                            <h4 className="name">
                              <a href="#">Leslie Alexander</a>
                            </h4>
                            <ul className="candidate-info">
                              <li className="designation">UI Designer</li>
                              <li>
                                <span className="icon flaticon-map-locator" />{" "}
                                London, UK
                              </li>
                            </ul>
                            <ul className="post-tags">
                              <li>
                                <a href="#">App</a>
                              </li>
                              <li>
                                <a href="#">Design</a>
                              </li>
                              <li>
                                <a href="#">Digital</a>
                              </li>
                            </ul>
                          </div>
                          <div className="option-box">
                            <ul className="option-list">
                              <li>
                                <a
                                  href="candidates-single.html"
                                  data-text="View application"
                                >
                                  <span className="la la-eye" />
                                </a>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Approval-1"
                                  data-text="Approve Application"
                                >
                                  <span className="la la-check" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Reject-1"
                                  data-text="Reject Application"
                                >
                                  <span className="la la-times-circle" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-1"
                                  className="delete-btn-1"
                                  data-id={1}
                                  data-text="Delete Application"
                                >
                                  <span className="la la-trash" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Candidate block three */}
                      <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image">
                              <img
                                src="images/resource/candidate-1.png"
                                alt=""
                              />
                            </figure>
                            <h4 className="name">
                              <a href="#">Darlene Robertson</a>
                            </h4>
                            <ul className="candidate-info">
                              <li className="designation">UI Designer</li>
                              <li>
                                <span className="icon flaticon-map-locator" />{" "}
                                London, UK
                              </li>
                            </ul>
                            <ul className="post-tags">
                              <li>
                                <a href="#">App</a>
                              </li>
                              <li>
                                <a href="#">Design</a>
                              </li>
                              <li>
                                <a href="#">Digital</a>
                              </li>
                            </ul>
                          </div>
                          <div className="option-box">
                            <ul className="option-list">
                              <li>
                                <a
                                  href="candidates-single.html"
                                  data-text="View application"
                                >
                                  <span className="la la-eye" />
                                </a>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Approval-1"
                                  data-text="Approve Application"
                                >
                                  <span className="la la-check" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Reject-1"
                                  data-text="Reject Application"
                                >
                                  <span className="la la-times-circle" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-1"
                                  className="delete-btn-1"
                                  data-id={1}
                                  data-text="Delete Application"
                                >
                                  <span className="la la-trash" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Candidate block three */}
                      <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image">
                              <img
                                src="images/resource/candidate-2.png"
                                alt=""
                              />
                            </figure>
                            <h4 className="name">
                              <a href="#">Wade Warren</a>
                            </h4>
                            <ul className="candidate-info">
                              <li className="designation">UI Designer</li>
                              <li>
                                <span className="icon flaticon-map-locator" />{" "}
                                London, UK
                              </li>
                            </ul>
                            <ul className="post-tags">
                              <li>
                                <a href="#">App</a>
                              </li>
                              <li>
                                <a href="#">Design</a>
                              </li>
                              <li>
                                <a href="#">Digital</a>
                              </li>
                            </ul>
                          </div>
                          <div className="option-box">
                            <ul className="option-list">
                              <li>
                                <a
                                  href="candidates-single.html"
                                  data-text="View application"
                                >
                                  <span className="la la-eye" />
                                </a>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Approval-1"
                                  data-text="Approve Application"
                                >
                                  <span className="la la-check" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Reject-1"
                                  data-text="Reject Application"
                                >
                                  <span className="la la-times-circle" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-1"
                                  className="delete-btn-1"
                                  data-id={1}
                                  data-text="Delete Application"
                                >
                                  <span className="la la-trash" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Candidate block three */}
                      <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image">
                              <img
                                src="images/resource/candidate-3.png"
                                alt=""
                              />
                            </figure>
                            <h4 className="name">
                              <a href="#">Leslie Alexander</a>
                            </h4>
                            <ul className="candidate-info">
                              <li className="designation">UI Designer</li>
                              <li>
                                <span className="icon flaticon-map-locator" />{" "}
                                London, UK
                              </li>
                            </ul>
                            <ul className="post-tags">
                              <li>
                                <a href="#">App</a>
                              </li>
                              <li>
                                <a href="#">Design</a>
                              </li>
                              <li>
                                <a href="#">Digital</a>
                              </li>
                            </ul>
                          </div>
                          <div className="option-box">
                            <ul className="option-list">
                              <li>
                                <a
                                  href="candidates-single.html"
                                  data-text="View application"
                                >
                                  <span className="la la-eye" />
                                </a>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Approval-1"
                                  data-text="Approve Application"
                                >
                                  <span className="la la-check" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-Reject-1"
                                  data-text="Reject Application"
                                >
                                  <span className="la la-times-circle" />
                                </button>
                              </li>
                              <li>
                                <button
                                  id="openModalBtn-1"
                                  className="delete-btn-1"
                                  data-id={1}
                                  data-text="Delete Application"
                                >
                                  <span className="la la-trash" />
                                </button>
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
          </div>
        </section>
        {/* End Dashboard */}
        {/* Copyright */}
        <div className="copyright-text">
          <p>© 2024 VTA. All Right Reserved.</p>
        </div>
        {/* End Page Wrapper */}
        {/* modal box for delete candidate */}
        <div id="myModal-cand" className="modal-cand">
          <div className="modal-content-cand-half">
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
        <div id="deleteModal-1" className="delete_m_dashboard">
          <div className="delete_cont">
            <span className="close" data-id={1}>
              ×
            </span>
            <h5>Are you sure you want to delete the applicant?</h5>
            <div className="delete_actions">
              <button className="cancel" data-id={1}>
                Yes
              </button>
              <button className="delete" data-id={1}>
                No
              </button>
            </div>
          </div>
        </div>
        {/* Approval button prompt */}
        <div id="deleteModal-Approval-1" className="delete_m_dashboard">
          <div className="delete_cont">
            <span className="close" id="closeModalBtn-Approval-1">
              ×
            </span>
            <h5>Do you want to confirm the approval of this applicant?</h5>
            <div className="delete_actions">
              <button className="cancel" id="cancelBtn-Approval-1">
                Yes
              </button>
              <button className="delete" id="cancelBtnNo-Approval-1">
                No
              </button>
            </div>
          </div>
        </div>
        {/* Reject button prompt */}
        <div id="deleteModal-Reject-1" className="delete_m_dashboard">
          <div className="delete_cont">
            <span className="close" id="closeModalBtn-Reject-1">
              ×
            </span>
            <h5>
              Are you sure you want to proceed with rejecting this applicant?
            </h5>
            <div className="delete_actions">
              <button className="cancel" id="cancelBtn-Reject-1">
                Yes
              </button>
              <button className="delete" id="cancelBtnNo-Reject-1">
                No
              </button>
            </div>
          </div>
        </div>
        {/* notification box */}
        <div className="notify" id="notify-3">
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
        {/*  */}
        {/* Chart.js // documentation: http://www.chartjs.org/docs/latest/ */}
      </div>
    </div>
  );
};

export default CompanyDashboard;
