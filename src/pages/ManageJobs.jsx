import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/job/");
        console.log("API Response:", response.data);

        setJobs(response.data.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);
  const handleDelete = async (jobId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:4000/api/job/${jobId}`);
          setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));

          Swal.fire("Deleted!", "The job has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting job:", error);
          Swal.fire("Error", "Failed to delete job.", "error");
        }
      }
    });
  };
  return (
    <>
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
                        src="images/VTA-logo.png"
                        style={{ width: "60%", marginBottom: 5 }}
                        alt=""
                        title=""
                      />
                    </a>
                  </div>
                </div>
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
                  src="images/VTA.png"
                  alt=""
                  title=""
                  style={{ width: 150, height: "auto" }}
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
              <li>
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
              <li className="active">
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
                <a href="dashboard-messages.html">
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
        {/* Dashboard */}
        <section className="user-dashboard">
          <div className="dashboard-outer">
            <div className="upper-title-box">
              <h3>Manage Jobs</h3>
              <div className="text" style={{ color: "gray" }}>
                Ready to jump back in?
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Ls widget */}
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>My Job Listings</h4>
                      <div className="chosen-outer">
                        {/*Tabs Box*/}
                        <select className="chosen-select">
                          <option>Last 6 Months</option>
                          <option>Last 12 Months</option>
                          <option>Last 16 Months</option>
                          <option>Last 24 Months</option>
                          <option>Last 5 year</option>
                        </select>
                      </div>
                    </div>
                    <div className="widget-content">
                      <div className="table-outer">
                        <table className="default-table manage-job-table">
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Applications</th>
                              <th>Created & Expired</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {jobs.map((job) => (
                              <tr key={job._id}>
                                <td>
                                  <h6>{job.title}</h6>
                                  <span className="info">
                                    <i className="icon flaticon-map-locator" />{" "}
                                    {job.location}
                                  </span>
                                </td>
                                <td className="applied">
                                  <a
                                    href={`dashboard-applied-applicants/${job._id}`}
                                  >
                                    {job.applications
                                      ? job.applications.length
                                      : "0"}{" "}
                                    Applied
                                  </a>
                                </td>
                                <td>
                                  {new Date(job.createdAt).toLocaleDateString()}{" "}
                                  <br />
                                  {new Date(
                                    job.expirationDate
                                  ).toLocaleDateString()}
                                </td>
                                <td className="status">Active</td>
                                <td>
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <a
                                          href={`dashboard-manage-job-view/${job._id}`}
                                        >
                                          <button data-text="View">
                                            <span className="la la-eye" />
                                          </button>
                                        </a>
                                      </li>
                                      <li>
                                        <button
                                          className="btn"
                                          data-text="Delete"
                                          onClick={() => handleDelete(job._id)}
                                        >
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
      {/* notification box */}
      <div className="notify" id="notify-1">
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
      {/*Google Map APi Key*/}
      {/*End Google Map APi*/}
    </>
  );
};

export default ManageJobs;
