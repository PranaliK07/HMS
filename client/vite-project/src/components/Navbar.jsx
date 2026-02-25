import React from "react";
import { Navbar as BSNavbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <BSNavbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <BSNavbar.Brand as={Link} to="/dashboard">
          Hospital Management System
        </BSNavbar.Brand>

        <Nav className="ms-auto">
          <Dropdown align="end">
            <Dropdown.Toggle variant="secondary" id="admin-dropdown">
              Admin
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/logout">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;