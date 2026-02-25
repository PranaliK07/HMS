import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      <h2 className="logo">CarePlus HMS</h2>

      <nav>
        <NavLink to={`/${role}/dashboard`}>Dashboard</NavLink>

        {role === "admin" && (
          <>
            <NavLink to="/admin/patients">Patients</NavLink>
            <NavLink to="/admin/doctors">Doctors</NavLink>
            <NavLink to="/admin/appointments">Appointments</NavLink>
            <NavLink to="/admin/billing">Billing</NavLink>
          </>
        )}

        {role === "doctor" && (
          <>
            <NavLink to="/doctor/appointments">My Appointments</NavLink>
            <NavLink to="/doctor/patients">My Patients</NavLink>
          </>
        )}

        {role === "patient" && (
          <>
            <NavLink to="/patient/book">Book Appointment</NavLink>
            <NavLink to="/patient/history">Medical History</NavLink>
          </>
        )}

        {role === "receptionist" && (
          <>
            <NavLink to="/receptionist/book">Book Appointment</NavLink>
            <NavLink to="/receptionist/patients">Patients</NavLink>
          </>
        )}

        {role === "accountant" && (
          <>
            <NavLink to="/accountant/billing">Billing</NavLink>
            <NavLink to="/accountant/payments">Payments</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;