import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { role: urlRole } = useParams();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(urlRole || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (urlRole) setRole(urlRole);
  }, [urlRole]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Sending request with:", { email, role });

      const response = await axios.post(
        "http://localhost:4000/auth/forgot-password",
        { email, role }
      );

      console.log("Forgot Password Response:", response.data);
      if (response.status === 200) {
        Swal.fire(
          "Success",
          "Password reset link sent to your email!",
          "success"
        );
      }
    } catch (error) {
      console.error(
        "Forgot Password Error:",
        error.response?.data || error.message
      );
      Swal.fire(
        "Error",
        error.response?.data?.message || "Invalid email or role!",
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
