import React, { useState } from "react";

const AddRecruiter = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    // formData.append("profilePic", profilePic);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost:4000/api/update-profile", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="model">
      <div id="forgot-password-modal">
        <div className="login-form default-form">
          <div className="form-inner">
            <h3>Add Recruiter</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Add Recruiter"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecruiter;
