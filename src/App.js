import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployerRegister from "./pages/EmployerRegister";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import CompanyProfile from "./pages/CompanyProfile";
import CompanyDashboard from "./pages/CompanyDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import JobPost from "./pages/JobPost";
import ManageJobs from "./pages/ManageJobs";
import ResetPassword from "./pages/ResetPassword";
import Jobs from "./pages/Jobs";
import EditJobs from "./pages/EditJobs";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/PostJob" element={<JobPost/>} /> 
        <Route path="/ComapanyProfile" element={<CompanyProfile/>} />
        <Route path="/CandidateDashboard" element={<CandidateDashboard/>} />
        <Route path="/companydashboard" element={<CompanyDashboard/>} />
        <Route path="/EmployerRegister" element={<EmployerRegister/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/ForgotPassword" element={<ForgetPassword/>} />
        <Route path="/ManageJobs" element={<ManageJobs/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/Jobs" element={<Jobs/>} />
        <Route path="/EditJobs" element={<EditJobs/>} />
        <Route path="/EditJobs/:jobId" element={<EditJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
