import axios from "axios";
import React, { useEffect, useState } from "react";
import TemporaryDrawer from "./SideBar";
import { Link, useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobType, setJobType] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const applyFilters = () => {
    let filtered = jobs;

    if (searchQuery) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((job) => job.jobCategory === category);
    }

    if (jobType) {
      filtered = filtered.filter((job) => job.jobType === jobType);
    }

    if (experience) {
      filtered = filtered.filter(
        (job) =>
          job.minExperience <= parseInt(experience) &&
          job.maxExperience >= parseInt(experience)
      );
    }

    if (salary) {
      const salaryRange = salary.split(" - ").map((s) => parseInt(s));
      if (salaryRange.length === 2) {
        filtered = filtered.filter(
          (job) =>
            job.minSalary >= salaryRange[0] && job.maxSalary <= salaryRange[1]
        );
      }
    }

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [
    searchQuery,
    location,
    category,
    jobType,
    datePosted,
    experience,
    salary,
  ]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/job/");
        setJobs(response.data.data.jobs);
        setFilteredJobs(response.data.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    let updatedJobs = jobs;

    if (jobType) {
      updatedJobs = jobs.filter((job) => job.jobType === jobType);
    }

    setFilteredJobs(updatedJobs.slice(0, itemsPerPage));
  }, [jobType, itemsPerPage, jobs]);
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
                  <li className="current ">
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
                          329 Queensberry Street, North Melbourne VIC <br />
                          3051, Australia.
                        </span>
                        <a href="mailto:support@superio.com" className="email">
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
              {/* Add Listing */}
              <a
                href="candidate-dashboard-cv-manager.html"
                className="upload-cv"
              >
                Upload your CV
              </a>
              {/* Login/Register */}
              <div className="btn-box">
                <a
                  href="login-popup.html"
                  className="theme-btn btn-style-three call-modal"
                >
                  <span style={{ color: "white" }}>Login / Register</span>
                </a>
                <a
                  href="dashboard-post-job.html"
                  className="theme-btn btn-style-one"
                >
                  <span style={{ color: "white" }}>Job Post</span>
                </a>
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
                <TemporaryDrawer />
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <div id="nav-mobile" />
        </header>
        {/*End Main Header */}
        {/*Page Title*/}
        <section className="page-title style-three">
          <div className="auto-container">
            {/* Job Search Form */}
            <div className="job-search-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="form-group col-lg-4 col-md-12 col-sm-12">
                    <span className="icon flaticon-search-1" />
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
                    <span className="icon flaticon-map-locator" />
                    <input
                      type="text"
                      placeholder="City or postcode"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
                    <span className="icon flaticon-briefcase" />
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      <option value="Accounting / Finance">
                        Accounting / Finance
                      </option>
                      <option value="Automotive Jobs">Automotive Jobs</option>
                      <option value="Customer">Customer</option>
                      <option value="Design">Design</option>
                      <option value="Development">Development</option>
                      <option value="Health and Care">Health and Care</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Project Management">
                        Project Management
                      </option>
                    </select>
                  </div>

                  <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                    <button type="submit" className="theme-btn btn-style-one">
                      Find Jobs
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Job Filters */}
            <div className="top-filters">
              <div className="form-group">
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="">Job Type</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  value={datePosted}
                  onChange={(e) => setDatePosted(e.target.value)}
                >
                  <option value="">Date Posted</option>
                  <option value="1">Last 1 day</option>
                  <option value="3">Last 3 days</option>
                  <option value="7">Last 7 days</option>
                  <option value="15">Last 15 days</option>
                  <option value="30">Last 30 days</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">Experience Level</option>
                  <option value="0">Fresher</option>
                  <option value="1">0-1</option>
                  <option value="2">2-5</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="">Salary estimate</option>
                  <option value="0 - 3">0 - 3 Lakhs</option>
                  <option value="3 - 6">3 - 6 Lakhs</option>
                  <option value="6 - 10">6 - 10 Lakhs</option>
                  <option value="10 - 15">10 - 15 Lakhs</option>
                  <option value="15 - 20">15+ Lakhs</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        {/*End Page Title*/}
        {/* Listing Section */}
        <section className="ls-section style-three">
          <div className="auto-container">
            <div className="filters-backdrop" />
            <div className="row">
              <div className="content-column col-lg-12">
                <div className="ls-outer">
                  {/* Sorting & Filtering */}
                  <div className="ls-switcher">
                    <div className="showing-result">
                      <div className="text">
                        Showing <strong>{filteredJobs.length}</strong> jobs
                      </div>
                    </div>
                    <div className="sort-by">
                      <select
                        className="chosen-select"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                      >
                        <option value="">All Jobs</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Internship">Internship</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Temporary">Temporary</option>
                      </select>
                      <select
                        className="chosen-select"
                        value={itemsPerPage}
                        onChange={(e) =>
                          setItemsPerPage(Number(e.target.value))
                        }
                      >
                        <option value={10}>Show 10</option>
                        <option value={20}>Show 20</option>
                        <option value={30}>Show 30</option>
                        <option value={40}>Show 40</option>
                        <option value={50}>Show 50</option>
                      </select>
                    </div>
                  </div>

                  {/* Job Listing */}
                  <div className="row">
                    {filteredJobs.map((job) => (
                      <div
                        key={job._id}
                        className="job-block-four col-xl-3 col-lg-4 col-md-6 col-sm-12"
                        onClick={() =>
                          navigate(`/CandidateJobSingle/${job._id}`)
                        }
                      >
                        <div className="inner-box">
                          <ul className="job-other-info">
                            <li className="time">{job.jobType}</li>
                          </ul>
                          <span className="company-logo">
                            <img
                              src="images/resource/company-logo/3-1.png"
                              alt="Company Logo"
                            />
                          </span>
                          <span className="company-name">
                            {job.companyName || "Unknown Company"}
                          </span>
                          <h4>
                            <Link to={`/CandidateJobSingle/${job._id}`}>
                              {job.title}
                            </Link>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator" />{" "}
                            {job.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show More Button */}
                  <div className="ls-show-more">
                    <p>
                      Showing {filteredJobs.length} of {jobs.length} Jobs
                    </p>
                    <button
                      className="show-more"
                      onClick={() => setItemsPerPage((prev) => prev + 10)}
                    >
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Listing Page Section */}
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
                    <a href="mailto:support@superio.com" className="email">
                      support@infoziant.com
                    </a>
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

export default Jobs;
