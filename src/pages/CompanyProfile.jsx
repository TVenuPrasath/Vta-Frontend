import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";

const CompanyProfile = () => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutCompany, setAboutCompany] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCover, setSelectedCover] = useState(null);
  const [categories, setcategories] = useState([]);

  const categoryOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Management", label: "Management" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    website: "",
    establishedSince: "",
    teamSize: "50 - 100",
    categories: [],
    allowSearch: true,
    admin: "",
    recruiters: [],
    facebook: "",
    twitter: "",
    linkedin: "",
    googlePlus: "",
  });

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const handleCoverUpload = (event) => setSelectedCover(event.target.files[0]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "allowSearch" ? value === "Yes" : value,
    }));
  };

  const handleAboutChange = (event) => setAboutCompany(event.target.value);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selectedOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      categories: selectedOptions.map((option) => option.value),
    }));
    setSelectedCategories(selectedOptions);
  };
  const notifyToggleAppliedJob = () => {
    alert("Notification clicked!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", "securepassword123");
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("website", formData.website);
    formDataToSend.append("establishedSince", formData.establishedSince);
    formDataToSend.append("admin", "");
    formDataToSend.append("recruiters", "");
    formDataToSend.append("teamSize", formData.teamSize);
    formDataToSend.append("categories", formData.categories.join(","));
    formDataToSend.append("allowSearch", formData.allowSearch);
    formDataToSend.append("about", aboutCompany);

    if (selectedFile) {
      formDataToSend.append("logo", selectedFile);
    }
    if (selectedCover) {
      formDataToSend.append("coverImage", selectedCover);
    }

    // for (let [key, value] of formDataToSend.entries()) {
    //   console.log(key, value);
    // }
    try {
      const response = await axios.post(
        "http://localhost:4000/api/company/register",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      localStorage.setItem("companyId", response.data.data._id);
      console.log("Company ID stored:", response.data.data._id);
      Swal.fire("Success", "Employer registered successfully!", "success");
      navigate("/companydashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Swal.fire("Failed", "Employer register failed", "fail");
    }
  };

  return (
    <>
      <title>VTA | Company Profile</title>
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
                <button className="menu-btn-1" onClick={notifyToggleAppliedJob}>
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
              <li>
                <a href="dashboard.html">
                  {" "}
                  <i className="la la-home" /> Dashboard
                </a>
              </li>
              <li className="active">
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
                <a href="dashboard-messages.html">
                  <i className="fa-light fa-network-wired" />
                  SME Connect
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
                {/* <a onClick={notifyToggleAppliedJob}> */}
                <a>
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
              <h3>Company Profile!</h3>
              <div className="text" style={{ color: "black" }}>
                Ready to jump back in?
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Ls widget */}
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>My Profile</h4>
                    </div>
                    <div className="widget-content">
                      <div className="uploading-outer">
                        <div className="uploadButton">
                          <input
                            className="uploadButton-input"
                            type="file"
                            name="logo"
                            accept="image/*"
                            id="upload"
                            onChange={handleFileChange}
                          />
                          <label
                            className="uploadButton-button ripple-effect"
                            htmlFor="upload"
                          >
                            Browse Logo
                          </label>
                          <span className="uploadButton-file-name">
                            {selectedFile
                              ? selectedFile.name
                              : "No file selected"}
                          </span>
                        </div>

                        <div className="text" style={{ color: "black" }}>
                          Max file size is 1MB, Minimum dimension: 330x300 And
                          Suitable files are .jpg &amp; .png
                        </div>
                      </div>
                      <div className="uploading-outer">
                        <div className="uploadButton">
                          <input
                            className="uploadButton-input"
                            type="file"
                            name="coverImage"
                            accept="image/*"
                            id="upload_cover"
                            onChange={handleCoverUpload}
                          />
                          <label
                            className="uploadButton-button ripple-effect"
                            htmlFor="upload_cover"
                          >
                            Browse Cover
                          </label>
                          <span className="uploadButton-file-name">
                            {selectedCover
                              ? selectedCover.name
                              : "No file selected"}
                          </span>
                        </div>
                        <div className="text" style={{ color: "black" }}>
                          Max file size is 1MB, Minimum dimension: 330x300 And
                          Suitable files are .jpg &amp; .png
                        </div>
                      </div>
                      <form className="default-form">
                        <div className="row">
                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Company name (optional)</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Infoziant"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Email address</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="support@infoziant.com"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Password</label>
                            <input
                              type="password"
                              name="password"
                              placeholder="Enter your password"
                              value={formData.password}
                              onChange={handleInputChange}
                            />
                          </div>
                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Phone Number</label>
                            <input
                              type="number"
                              name="phone"
                              placeholder="Enter your Number"
                              value={formData.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Website</label>
                            <input
                              type="url"
                              name="website"
                              placeholder="www.infoziant.com"
                              value={formData.website}
                              onChange={handleInputChange}
                            />
                          </div>
                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Est. Since</label>
                            <br></br>
                            <input
                              type="date" // Changed to 'date' for better validation
                              name="establishedSince"
                              placeholder="06.04.2015"
                              value={formData.establishedSince}
                              onChange={handleInputChange}
                            />
                          </div>
                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Team Size</label>
                            <select className="chosen-select">
                              <option>50 - 100</option>
                              <option>100 - 150</option>
                              <option>200 - 250</option>
                              <option>300 - 350</option>
                              <option>500 - 1000</option>
                            </select>
                          </div>
                          {/* Search Select */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Categories-Multiple select</label>
                            <Select
                              isMulti
                              name="categories"
                              options={categoryOptions}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              value={selectedCategories}
                              onChange={handleCategoryChange}
                            />
                          </div>

                          {/* Input */}
                          <div className="form-group col-lg-6 col-md-12">
                            <label>Allow In Search &amp; Listing</label>
                            <select
                              className="chosen-select"
                              name="allowSearch"
                              value={formData.allowSearch ? "Yes" : "No"}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  allowSearch: e.target.value === "Yes",
                                }))
                              }
                            >
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          {/* About Company */}
                          <div className="form-group col-lg-12 col-md-12">
                            <label>About Company</label>
                            <textarea
                              placeholder="Infoziant IT Solutions Inc is a Hall of Fame Information Security company recognized for vulnerability disclosure by Apple, Microsoft, Google, United Nations, Australian Govt, Dutch Govt, Indian Govt, HP, Lenovo, DELL, SAP, Net Gear, ZOHO, and many more. Infoziant founder had extensive experience working in top security firms like McAfee, Symantec, EMC. Our unique and comprehensive security assessment and remediation process protects your web applications from cyber attacks. We follow the 3 Ps approach: we PROTECT your environment, we PREVENT attacks, we PRESCRIBE best coding practices to secure your applications."
                              value={aboutCompany}
                              onChange={handleAboutChange}
                            />
                          </div>
                          {/* Input */}
                          {/* <div className="form-group col-lg-6 col-md-12">
                            <button
                              className="theme-btn btn-style-one"
                              onClick={handleSubmit}
                            >
                              Save
                            </button>
                          </div> */}
                          {/* Ls widget */}
                          <div className="ls-widget">
                            <div className="tabs-box">
                              <div className="widget-title">
                                <h4>Social Network</h4>
                              </div>
                              <div className="widget-content">
                                {/* <form className="default-form"> */}
                                <div className="row">
                                  {/* Input */}
                                  <div className="form-group col-lg-6 col-md-12">
                                    <label>Facebook</label>
                                    <input
                                      type="text"
                                      name="facebook"
                                      placeholder="www.facebook.com/Infoziant"
                                      value={formData.facebook}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {/* Input */}
                                  <div className="form-group col-lg-6 col-md-12">
                                    <label>Twitter</label>
                                    <input
                                      type="text"
                                      name="twitter"
                                      placeholder="Enter Twitter URL"
                                      value={formData.twitter}
                                      onChange={handleInputChange}
                                    />
                                  </div>

                                  {/* Input */}
                                  <div className="form-group col-lg-6 col-md-12">
                                    <label>LinkedIn</label>
                                    <input
                                      type="text"
                                      name="linkedin"
                                      placeholder="Enter LinkedIn URL"
                                      value={formData.linkedin}
                                      onChange={handleInputChange}
                                    />
                                  </div>

                                  {/* Input */}
                                  <div className="form-group col-lg-6 col-md-12">
                                    <label>Google Plus</label>
                                    <input
                                      type="text"
                                      name="googlePlus"
                                      placeholder="Enter Google Plus URL"
                                      value={formData.googlePlus}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {/* Input */}
                                  <div className="form-group col-lg-6 col-md-12">
                                    <button
                                      className="theme-btn btn-style-one"
                                      onClick={handleSubmit}
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                                {/* </form> */}
                              </div>
                            </div>
                          </div>
                          {/* Ls widget */}
                        </div>
                      </form>
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

export default CompanyProfile;
