import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditJobs = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [originalData, setOriginalData] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/job/${jobId}`
        );
        if (response.data.success) {
          setOriginalData(response.data.data);
          setFormData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        Swal.fire("Error", "Failed to fetch job details.", "error");
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getUpdatedFields = () => {
    const updatedFields = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== originalData[key]) {
        updatedFields[key] = formData[key];
      }
    });
    return updatedFields;
  };

  const handleUpdateJob = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedFields = getUpdatedFields();
    if (Object.keys(updatedFields).length === 0) {
      Swal.fire("No Changes", "You haven't made any changes.", "info");
      setLoading(false);
      return;
    }

    try {
      await axios.put(`http://localhost:4000/api/job/${jobId}`, updatedFields);

      Swal.fire("Success", "Job updated successfully!", "success").then(() => {
        navigate("/ManageJobs");
      });
    } catch (error) {
      console.error("Error updating job:", error);
      Swal.fire("Error", "Failed to update job.", "error");
    } finally {
      setLoading(false);
    }
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
              <li className="active">
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
              <h3>Edit Job!</h3>
              <div className="text">Ready to jump back in?</div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Ls widget */}
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Post Job</h4>
                    </div>
                    <div className="widget-content">
                      <div className="post-job-steps">
                        <div className="step">
                          <span
                            style={{ color: "purple" }}
                            className="icon flaticon-briefcase"
                          />
                          <h5>Job Detail</h5>
                        </div>
                        <div className="step">
                          <span
                            style={{ color: "purple" }}
                            className="icon flaticon-money"
                          />
                          <h5>Package &amp; Payments</h5>
                        </div>
                        <div className="step">
                          <span
                            style={{ color: "purple" }}
                            className="icon flaticon-checked"
                          />
                          <h5>Confirmation</h5>
                        </div>
                      </div>
                      <form className="default-form" onSubmit={handleUpdateJob}>
                        <div className="row">
                          {/* Job Title */}
                          <div className="form-group col-lg-12 col-md-12">
                            <label>Job Title</label>
                            <input
                              type="text"
                              name="title"
                              value={formData.title}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          {/* Job Description */}
                          <div className="form-group col-lg-12 col-md-12">
                            <label>Job Description</label>
                            <textarea
                              type="text"
                              name="description"
                              placeholder="Enter job description here"
                              value={formData.description}
                              onChange={handleInputChange}
                            />
                          </div>

                          {/* Work Hours */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Work Hours</label>
                            <input
                              type="text"
                              name="workHours"
                              value={formData.workHours}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          {/* Job Category */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Specialisms (Job Category)</label>
                            <select
                              className="chosen-select"
                              name="jobCategory"
                              value={formData.jobCategory || ""}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Job Category</option>
                              <option value="Accounting / Finance">
                                Accounting / Finance
                              </option>
                              <option value="Automotive Jobs">
                                Automotive Jobs
                              </option>
                              <option value="Customer">Customer</option>
                              <option value="Design">Design</option>
                              <option value="Development">Development</option>
                              <option value="Health and Care">
                                Health and Care
                              </option>
                              <option value="Marketing">Marketing</option>
                              <option value="Project Management">
                                Project Management
                              </option>
                            </select>
                          </div>

                          {/* Job Type */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Job Type</label>
                            <select
                              name="jobType"
                              value={formData.jobType || ""}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Job Type</option>
                              <option value="Full Time">Full Time</option>
                              <option value="Part Time">Part Time</option>
                              <option value="Temporary">Temporary</option>
                              <option value="Internship">Internship</option>
                              <option value="Freelance">Freelance</option>
                            </select>
                          </div>

                          {/* Experience (Min & Max) */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Minimum Experience (Years)</label>
                            <input
                              type="number"
                              name="minExperience"
                              placeholder="e.g., 2"
                              value={formData.minExperience || ""}
                              onChange={handleInputChange}
                              min="0"
                            />
                          </div>

                          <div className="form-group col-lg-6 col-md-12">
                            <label>Maximum Experience (Years)</label>
                            <input
                              type="number"
                              name="maxExperience"
                              placeholder="e.g., 5"
                              value={formData.maxExperience || ""}
                              onChange={handleInputChange}
                              min="0"
                            />
                          </div>

                          {/* Salary (Min & Max) */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Minimum Salary (LPA)</label>
                            <input
                              type="number"
                              name="minSalary"
                              placeholder="e.g., 5"
                              value={formData.minSalary || ""}
                              onChange={handleInputChange}
                              min="0"
                            />
                          </div>

                          <div className="form-group col-lg-6 col-md-12">
                            <label>Maximum Salary (LPA)</label>
                            <input
                              type="number"
                              name="maxSalary"
                              placeholder="e.g., 10"
                              value={formData.maxSalary || ""}
                              onChange={handleInputChange}
                              min="0"
                            />
                          </div>

                          {/* Gender */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Gender</label>
                            <select
                              name="gender"
                              value={formData.gender || ""}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {/* Qualification */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Qualification</label>
                            <select
                              name="qualification"
                              value={formData.qualification || ""}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Qualification</option>
                              <option value="Bachelor’s Degree">
                                Bachelor’s Degree
                              </option>
                              <option value="Master’s Degree">
                                Master’s Degree
                              </option>
                              <option value="Doctorate (Ph.D.)">
                                Doctorate (Ph.D.)
                              </option>
                              <option value="Professional Certification">
                                Professional Certification
                              </option>
                              <option value="Associate Degree">
                                Associate Degree
                              </option>
                            </select>
                          </div>

                          {/* Location - Country & City */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Country</label>
                            <select
                              name="country"
                              value={formData.country || ""}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Country</option>
                              <option value="India">India</option>
                              <option value="USA">USA</option>
                              <option value="Canada">Canada</option>
                              <option value="UK">United Kingdom</option>
                              <option value="Germany">Germany</option>
                              <option value="France">France</option>
                              <option value="Australia">Australia</option>
                              <option value="Japan">Japan</option>
                            </select>
                          </div>

                          <div className="form-group col-lg-6 col-md-12">
                            <label>City</label>
                            <select
                              name="city"
                              value={formData.city || ""}
                              onChange={handleInputChange}
                            >
                              <option value="">Select City</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Bangalore">Bangalore</option>
                              <option value="Hyderabad">Hyderabad</option>
                              <option value="Kolkata">Kolkata</option>
                            </select>
                          </div>

                          {/* Address */}
                          <div className="form-group col-lg-12 col-md-12">
                            <label>Complete Address</label>
                            <input
                              type="text"
                              name="address"
                              value={formData.address || ""}
                              onChange={handleInputChange}
                              placeholder="Street, City, State, ZIP Code"
                            />
                          </div>

                          {/* Application Deadline */}
                          <div className="form-group col-lg-12 col-md-12">
                            <label>Application Deadline Date</label>
                            <br></br>
                            <input
                              type="date"
                              name="applicationDeadline"
                              value={formData.applicationDeadline || ""}
                              onChange={handleInputChange}
                            />
                          </div>

                          {/* Submit Button */}
                          <div className="form-group col-lg-12 col-md-12 text-right">
                            <button
                              type="submit"
                              className="theme-btn btn-style-one"
                              disabled={loading}
                            >
                              {loading ? "Updating..." : "Update Job"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End Dashboard */}
      {/* Copyright */}
      <div className="copyright-text">
        <p>© 2024 VTA. All Right Reserved.</p>
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
      <div className="notify">
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

export default EditJobs;
