import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white vh-100 p-3"
      style={{ width: "220px" }}
    >
      <h3 className="text-center mb-4">HMS</h3>
      <Nav className="flex-column">
        <Nav.Link className="text-white mb-2">Dashboard</Nav.Link>
        <Nav.Link className="text-white mb-2">Patients</Nav.Link>
        <Nav.Link className="text-white mb-2">Doctors</Nav.Link>
        <Nav.Link className="text-white mb-2">Staff</Nav.Link>
        <Nav.Link className="text-white mb-2">Billing</Nav.Link>
        <Nav.Link className="text-white mb-2">Reports</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;