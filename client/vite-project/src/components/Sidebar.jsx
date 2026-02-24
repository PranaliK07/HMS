import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "10px" }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/add-doctor">Add Doctor</Link></li>
        <li><Link to="/admin/manage-doctors">Manage Doctors</Link></li>
        <li><Link to="/patient">Patients</Link></li>
        <li><Link to="/staff">Staff</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;