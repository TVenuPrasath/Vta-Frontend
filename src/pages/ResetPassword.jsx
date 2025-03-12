import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get("token");

    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      localStorage.setItem("resetToken", tokenFromUrl);
    }
  }, [location]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!newPassword) {
      Swal.fire("Error", "Password cannot be empty!", "error");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/reset-password",
        {
          token: token || localStorage.getItem("resetToken"),
          newPassword,
        }
      );

      if (response.status === 200) {
        Swal.fire("Success", "Password reset successful!", "success");
        localStorage.removeItem("resetToken");
        navigate("/login");
      }
    } catch (error) {
      console.error("Reset Password Error:", error);
      Swal.fire("Error", "Invalid or expired token!", "error");
    }
  };

  return (
    <div className="model">
      <div id="forgot-password-modal">
        <div className="login-form default-form">
          <div className="form-inner">
            <h3>Enter New Password</h3>
            <form>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="submit"
                  onClick={handleResetPassword}
                >
                  Submit New Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
