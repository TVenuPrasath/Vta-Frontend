import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Step control
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Sending request with:", { email, role });

      const response = await axios.post(
        "http://localhost:4000/auth/forgot-password",
        {
          email: email,
          role: role,
        }
      );

      console.log("Forgot Password Response:", response.data);
      if (response.status === 200) {
        Swal.fire(
          "Success",
          "Password reset link sent to your email!",
          "success"
        );
        setStep(2);
      }
    } catch (error) {
      console.error(
        "Forgot Password Error:",
        error.response?.data || error.message
      );
      Swal.fire(
        "Error",
        error.response?.data?.message || "Invalid role or email not found!",
        "error"
      );
    }

    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");
    console.log("Token from local storage:", token);

    if (!token) {
      Swal.fire("Error", "Invalid or expired token. Try again!", "error");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending reset request with:", { token, newPassword });

      const response = await axios.post(
        "http://localhost:4000/auth/reset-password",
        {
          token: token,
          newPassword: newPassword,
        }
      );

      console.log("Reset Password Response:", response.data);
      if (response.status === 200) {
        Swal.fire(
          "Success",
          "Password reset successful! You can now log in.",
          "success"
        );
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(
        "Reset Password Error:",
        error.response?.data || error.message
      );
      Swal.fire(
        "Error",
        error.response?.data?.message || "Password reset failed!",
        "error"
      );
    }

    setLoading(false);
  };

  return (
    <div className="model">
      <div id="forgot-password-modal">
        <div className="login-form default-form">
          <div className="form-inner">
            <h3>Forgot Password</h3>
            <form>
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
                <label>Select Role</label>
                <select
                  name="role"
                  className="chosen-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="employer">Employer</option>
                  <option value="candidate">Candidate</option>
                </select>
              </div>
              <div className="form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="submit"
                  onClick={handleForgotPassword}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Reset Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
