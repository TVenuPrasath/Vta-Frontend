import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
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
        setOriginalData(response.data);
        setFormData(response.data);
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
        navigate("/manage-jobs");
      });
    } catch (error) {
      console.error("Error updating job:", error);
      Swal.fire("Error", "Failed to update job.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Edit Job</h2>
      <form onSubmit={handleUpdateJob}>
        {/* Job Title */}
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        {/* Job Description */}
        <div className="form-group">
          <label>Job Description</label>
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleInputChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        {/* Work Hours */}
        <div className="form-group">
          <label>Work Hours</label>
          <input
            type="text"
            name="workHours"
            value={formData.workHours || ""}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        {/* Job Category */}
        <div className="form-group">
          <label>Job Category</label>
          <select
            name="jobCategory"
            value={formData.jobCategory || ""}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Job Category</option>
            <option value="Accounting / Finance">Accounting / Finance</option>
            <option value="Automotive Jobs">Automotive Jobs</option>
            <option value="Customer">Customer</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Health and Care">Health and Care</option>
            <option value="Marketing">Marketing</option>
            <option value="Project Management">Project Management</option>
          </select>
        </div>

        {/* Job Type */}
        <div className="form-group">
          <label>Job Type</label>
          <select
            name="jobType"
            value={formData.jobType || ""}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        {/* Experience */}
        <div className="form-group">
          <label>Minimum Experience (Years)</label>
          <input
            type="number"
            name="minExperience"
            value={formData.minExperience || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Maximum Experience (Years)</label>
          <input
            type="number"
            name="maxExperience"
            value={formData.maxExperience || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        {/* Salary */}
        <div className="form-group">
          <label>Minimum Salary (LPA)</label>
          <input
            type="number"
            name="minSalary"
            value={formData.minSalary || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Maximum Salary (LPA)</label>
          <input
            type="number"
            name="maxSalary"
            value={formData.maxSalary || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender || ""}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Qualification */}
        <div className="form-group">
          <label>Qualification</label>
          <select
            name="qualification"
            value={formData.qualification || ""}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Qualification</option>
            <option value="Bachelor’s Degree">Bachelor’s Degree</option>
            <option value="Master’s Degree">Master’s Degree</option>
            <option value="Doctorate (Ph.D.)">Doctorate (Ph.D.)</option>
            <option value="Professional Certification">
              Professional Certification
            </option>
            <option value="Associate Degree">Associate Degree</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div className="form-group">
          <label>Application Deadline Date</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="theme-btn btn-style-one"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Job"}
        </button>
      </form>
    </div>
  );
};

export default EditJobs;
