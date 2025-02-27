import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployerRegister from "./pages/EmployerRegister";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<RegisterPage/>} /> */}
        {/* <Route path="/" element={<EmployerRegister/>} /> */}
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
