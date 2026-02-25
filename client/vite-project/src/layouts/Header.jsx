import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div>
        <h3>{role.toUpperCase()} PANEL</h3>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;