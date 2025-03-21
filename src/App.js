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
import ProtectedRoute from "./pages/ProtectedRoute";
import ApplyJob from "./pages/ApplyJob";
import CandidateJobSingle from "./pages/CandidateJobSingle";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/ComapanyProfile" element={<CompanyProfile/>} />

        <Route element ={<ProtectedRoute allowedRoles={["company_admin"]}/>}>
        <Route path="/EmployerRegister" element={<EmployerRegister/>} />
        </Route>

        <Route element= {<ProtectedRoute allowedRoles={["candidate"]}/>}>
        <Route path="/Jobs" element={<Jobs/>} />
        <Route path="/CandidateDashboard" element={<CandidateDashboard/>} />
        <Route path="/ApplyJob/:jobId" element={<ApplyJob/>} />
        <Route path="/CandidateJobSingle/:jobId" element={<CandidateJobSingle />} />
        </Route>

        <Route element = {<ProtectedRoute allowedRoles={["company_admin","recruiter"]}/>}>
        <Route path="/PostJob" element={<JobPost/>} /> 
        <Route path="/ManageJobs" element={<ManageJobs/>} />
        <Route path="/EditJobs/:jobId" element={<EditJobs />} />
        <Route path="/companydashboard" element={<CompanyDashboard/>} />
        </Route>

        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/forgot-password/:role" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
