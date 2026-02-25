import React from "react";
import DashboardLayout from "../../layouts/DashBoardLayout";

const PatientDashboard = () => {
  return (
    <DashboardLayout role="patient">
      <h2>Welcome Patient</h2>

      <div className="dashboard-cards">
        <div className="card">Upcoming Appointments: 2</div>
        <div className="card">Medical Reports: 6</div>
        <div className="card">Pending Bills: ₹1500</div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;