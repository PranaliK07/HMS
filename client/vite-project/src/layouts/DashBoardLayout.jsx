import React from "react";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import "./DashboardLayout.css";

const DashboardLayout = ({ children, role }) => {
  return (
    <div className="dashboard">
      <Sidebar role={role} />
      <div className="main">
        <Header role={role} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;