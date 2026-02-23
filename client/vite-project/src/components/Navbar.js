import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <Link to="/dashboard" style={{ marginRight: "20px", color: "#fff" }}>Dashboard</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;