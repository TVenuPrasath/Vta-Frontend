// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     rememberMe: false,
//   });

//   const navigate = useNavigate(); // React Router navigation

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/candidate/login",
//         {
//           email: formData.username, // Assuming username field holds the email
//           password: formData.password,
//           rememberMe: formData.rememberMe,
//         }
//       );

//       if (response.status === 200 && response.data.success) {
//         // Store token (if received) for authentication
//         localStorage.setItem("authToken", response.data.token);

//         Swal.fire("Success", "Login successful!", "success");

//         // Redirect to Dashboard or Home after login
//         navigate("/dashboard");
//       } else {
//         Swal.fire("Error", "Invalid credentials. Please try again.", "error");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       Swal.fire(
//         "Error",
//         "Something went wrong. Please try again later.",
//         "error"
//       );
//     }
//   };

//   return (
//     <>
//       <div className="page-wrapper">
//         <header className="main-header">
//           <div className="container-fluid">
//             <div className="main-box">
//               <div className="nav-outer">
//                 <div className="logo-box">
//                   <div className="logo">
//                     <a href="index.html">
//                       <img
//                         src="images/VTA-logo.png"
//                         style={{ width: "60%", marginBottom: 5 }}
//                         alt="VTA Logo"
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <nav className="nav main-menu">
//                   <ul className="navigation" id="navbar">
//                     <li className="current">
//                       <a href="index.html">Home</a>
//                     </li>
//                     <li>
//                       <a href="about.html">About</a>
//                     </li>
//                     <li>
//                       <a href="jobs.html">Jobs</a>
//                     </li>
//                     <li>
//                       <a href="companies.html">Companies</a>
//                     </li>
//                     <li>
//                       <a href="courses.html">Courses</a>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//               <div className="outer-box">
//                 <div className="btn-box">
//                   <a
//                     href="register.html"
//                     className="theme-btn theme-clone bdrs30"
//                   >
//                     Register
//                   </a>
//                   <a
//                     href="login.html"
//                     className="home21-jp-btn login-btn bdrs30"
//                   >
//                     Login
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="login-section">
//           <div
//             className="image-layer"
//             style={{ backgroundImage: `url('/images/Sign Up Page.png')` }}
//           />

//           <div className="outer-box">
//             <div className="login-form default-form">
//               <div className="form-inner">
//                 <h3>Login to VTA</h3>

//                 <form onSubmit={handleLogin}>
//                   <div className="form-group">
//                     <label>Username</label>
//                     <input
//                       type="text"
//                       name="username"
//                       placeholder="Username"
//                       value={formData.username}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Password</label>
//                     <input
//                       id="password-field"
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <div className="field-outer">
//                       <div className="input-group checkboxes square">
//                         <input
//                           type="checkbox"
//                           name="rememberMe"
//                           id="remember"
//                           checked={formData.rememberMe}
//                           onChange={handleChange}
//                         />
//                         <label htmlFor="remember" className="remember">
//                           <span className="custom-checkbox" /> Remember me
//                         </label>
//                       </div>
//                       <a href="#" className="pwd">
//                         Forgot password?
//                       </a>
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <button className="theme-btn btn-style-one" type="submit">
//                       Log In
//                     </button>
//                   </div>
//                 </form>

//                 <div className="bottom-box">
//                   <div className="text">
//                     Don't have an account? <a href="register.html">Signup</a>
//                   </div>
//                   <div className="divider">
//                     <span>or</span>
//                   </div>

//                   <div className="btn-box row">
//                     <div className="col-lg-6 col-md-12">
//                       <a
//                         href="#"
//                         className="theme-btn social-btn-two google-btn"
//                       >
//                         <i className="fab fa-google" /> Log In via Gmail
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     rememberMe: false,
//   });

//   const navigate = useNavigate(); // React Router navigation

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simulated login check (Replace with API call)
//     if (formData.username && formData.password) {
//       console.log("Logging in with:", formData);
//       alert("Login Successful!"); // Replace with SweetAlert or Toast message

//       // Redirect to Dashboard or Home after login
//       navigate("/dashboard");
//     } else {
//       alert("Please enter username and password");
//     }
//   };

//   return (
//     <>
//       <div className="page-wrapper">
//         <header className="main-header">
//           <div className="container-fluid">
//             <div className="main-box">
//               <div className="nav-outer">
//                 <div className="logo-box">
//                   <div className="logo">
//                     <a href="index.html">
//                       <img
//                         src="images/VTA-logo.png"
//                         style={{ width: "60%", marginBottom: 5 }}
//                         alt="VTA Logo"
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <nav className="nav main-menu">
//                   <ul className="navigation" id="navbar">
//                     <li className="current">
//                       <a href="index.html">Home</a>
//                     </li>
//                     <li>
//                       <a href="about.html">About</a>
//                     </li>
//                     <li>
//                       <a href="jobs.html">Jobs</a>
//                     </li>
//                     <li>
//                       <a href="companies.html">Companies</a>
//                     </li>
//                     <li>
//                       <a href="courses.html">Courses</a>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//               <div className="outer-box">
//                 <div className="btn-box">
//                   <a
//                     href="register.html"
//                     className="theme-btn theme-clone bdrs30"
//                   >
//                     Register
//                   </a>
//                   <a
//                     href="login.html"
//                     className="home21-jp-btn login-btn bdrs30"
//                   >
//                     Login
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="login-section">
//           <div
//             className="image-layer"
//             style={{ backgroundImage: `url('/images/Sign Up Page.png')` }}
//           />

//           <div className="outer-box">
//             <div className="login-form default-form">
//               <div className="form-inner">
//                 <h3>Login to VTA</h3>

//                 <form onSubmit={handleLogin}>
//                   <div className="form-group">
//                     <label>Username</label>
//                     <input
//                       type="text"
//                       name="username"
//                       placeholder="Username"
//                       value={formData.username}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Password</label>
//                     <input
//                       id="password-field"
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <div className="field-outer">
//                       <div className="input-group checkboxes square">
//                         <input
//                           type="checkbox"
//                           name="rememberMe"
//                           id="remember"
//                           checked={formData.rememberMe}
//                           onChange={handleChange}
//                         />
//                         <label htmlFor="remember" className="remember">
//                           <span className="custom-checkbox" /> Remember me
//                         </label>
//                       </div>
//                       <a href="#" className="pwd">
//                         Forgot password?
//                       </a>
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <button className="theme-btn btn-style-one" type="submit">
//                       Log In
//                     </button>
//                   </div>
//                 </form>

//                 <div className="bottom-box">
//                   <div className="text">
//                     Don't have an account? <a href="register.html">Signup</a>
//                   </div>
//                   <div className="divider">
//                     <span>or</span>
//                   </div>

//                   <div className="btn-box row">
//                     <div className="col-lg-6 col-md-12">
//                       <a
//                         href="#"
//                         className="theme-btn social-btn-two google-btn"
//                       >
//                         <i className="fab fa-google" /> Log In via Gmail
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./login.css"; // Ensure this CSS file is correctly linked

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [selectedRole, setSelectedRole] = useState("candidate"); // Default role
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginUrl =
      selectedRole === "candidate"
        ? "http://localhost:4000/api/candidate/login"
        : "http://localhost:4000/api/employer/login";

    try {
      const response = await axios.post(loginUrl, {
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      if (response.status === 200 && response.data.success) {
        localStorage.setItem("authToken", response.data.token);
        Swal.fire("Success", "Login successful!", "success");
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        Swal.fire("Error", "Invalid credentials. Please try again.", "error");
      }
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    }
  };

  // Google login function
  const loginWithGoogle = () => {
    window.open(
      `http://localhost:4000/auth/google?role=${selectedRole}`,
      "_self"
    );
  };

  return (
    <>
      <div className="login-page">
        <h1 style={{ textAlign: "center" }}>Login</h1>

        <div className="form">
          {/* Role Selection */}
          <div className="role-switch">
            <button
              className={
                selectedRole === "candidate" ? "role-btn active" : "role-btn"
              }
              onClick={() => setSelectedRole("candidate")}
            >
              Candidate
            </button>
            <button
              className={
                selectedRole === "employer" ? "role-btn active" : "role-btn"
              }
              onClick={() => setSelectedRole("employer")}
            >
              Employer
            </button>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit">Login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>

          <button className="login-with-google-btn" onClick={loginWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
