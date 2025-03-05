import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployerRegister from "./pages/EmployerRegister";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import CompanyProfile from "./pages/CompanyProfile";
import CompanyDashboard from "./pages/CompanyDashboard";
import AddRecruiter from "./pages/AddRecruiter";
import CandidateDashboard from "./pages/CandidateDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage/>} /> 
        <Route path="/ComapanyProfile" element={<CompanyProfile/>} />
        <Route path="/CandidateDashboard" element={<CandidateDashboard/>} />
        <Route path="/companydashboard" element={<CompanyDashboard/>} />
        <Route path="/EmployerRegister" element={<EmployerRegister/>} />
         {/* <Route path="/Login" element={<LoginPage/>} /> */}
        {/* <Route path="/" element={<ForgetPassword/>} /> */}


      </Routes>
    </Router>
  );
}

export default App;
