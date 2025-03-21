import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("role");

  if (!token || (allowedRoles && !allowedRoles.includes(role))) {
    return <Navigate to="/Login"></Navigate>;
  }
  return <Outlet />;
};

export default ProtectedRoute;
