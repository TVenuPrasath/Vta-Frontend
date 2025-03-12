import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const userRole = localStorage.getItem("role");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        navigate("/login");
      }
    });
  };

  const handleNavigation = (option) => {
    if (option === "Dashboard") {
      if (userRole === "candidate") {
        navigate("/CandidateDashboard");
      } else {
        navigate("/CompanyDashboard");
      }
    } else if (option === "Manage Jobs") {
      navigate("/manage-jobs");
    } else if (option === "Post Job") {
      navigate("/post-job");
    } else if (option === "Logout") {
      handleLogout();
    }
  };

  const getMenuItems = () => {
    if (userRole === "candidate") {
      return ["Dashboard", "My Profile", "Applied Jobs", "Shortlisted Jobs"];
    } else if (userRole === "recruiter" || userRole === "company_admin") {
      return ["Dashboard", "Post Job", "Manage Jobs", "Applicants"];
    } else {
      return ["Dashboard"];
    }
  };

  return (
    <div>
      <button
        className="mobile-nav-toggler navbar-trigger"
        onClick={toggleDrawer(true)}
      >
        <span className="flaticon-menu-1" />
      </button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {getMenuItems().map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleNavigation(text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />

          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation("Logout")}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
