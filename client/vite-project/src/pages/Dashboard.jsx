import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar />

        <Container fluid className="p-4">
          <h2 className="mb-4">Welcome to Hospital Management System</h2>

          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="shadow-sm border-0 text-center p-3 h-100">
                <Card.Body>
                  <Card.Title>Patients</Card.Title>
                  <Card.Text>Manage all patient records</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="shadow-sm border-0 text-center p-3 h-100">
                <Card.Body>
                  <Card.Title>Doctors</Card.Title>
                  <Card.Text>View and manage doctors</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="shadow-sm border-0 text-center p-3 h-100">
                <Card.Body>
                  <Card.Title>Staff</Card.Title>
                  <Card.Text>Manage hospital staff</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="shadow-sm border-0 text-center p-3 h-100">
                <Card.Body>
                  <Card.Title>Billing</Card.Title>
                  <Card.Text>View and generate invoices</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;