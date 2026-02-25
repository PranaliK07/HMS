import React from "react";
import DashboardLayout from "../../layouts/DashBoardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout role="admin">
      <h2>Welcome Admin</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="card">Total Patients: 120</div>
        <div className="card">Total Doctors: 25</div>
        <div className="card">Appointments Today: 18</div>
        <div className="card">Monthly Revenue: ₹2,50,000</div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;