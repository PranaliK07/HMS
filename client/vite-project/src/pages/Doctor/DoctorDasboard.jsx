import React from "react";
import { Row, Col, Card, Table, Badge, Button } from "react-bootstrap";
import DashboardLayout from "../../layouts/DashBoardLayout";

const DoctorDashboard = () => {
  return (
    <DashboardLayout role="doctor">
      <div className="p-3">
        <h2 className="mb-4">Doctor Dashboard</h2>

        {/* Summary Cards */}
        <Row className="g-4 mb-4">
          <Col xs={12} sm={6} lg={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h6>Total Patients</h6>
                <h3 className="text-primary">120</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h6>Today's Appointments</h6>
                <h3 className="text-success">8</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h6>Pending Reports</h6>
                <h3 className="text-warning">5</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h6>Completed Consultations</h6>
                <h3 className="text-info">45</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Appointment Table */}
        <Card className="shadow-sm border-0">
          <Card.Body>
            <h5 className="mb-3">Recent Appointments</h5>

            <div className="table-responsive">
              <Table hover>
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Patient Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rahul Sharma</td>
                    <td>25 Feb 2026</td>
                    <td>10:00 AM</td>
                    <td>
                      <Badge bg="success">Completed</Badge>
                    </td>
                    <td>
                      <Button size="sm" variant="primary">
                        View
                      </Button>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Anjali Patil</td>
                    <td>25 Feb 2026</td>
                    <td>11:30 AM</td>
                    <td>
                      <Badge bg="warning">Pending</Badge>
                    </td>
                    <td>
                      <Button size="sm" variant="primary">
                        View
                      </Button>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Vikram Joshi</td>
                    <td>25 Feb 2026</td>
                    <td>01:00 PM</td>
                    <td>
                      <Badge bg="danger">Cancelled</Badge>
                    </td>
                    <td>
                      <Button size="sm" variant="primary">
                        View
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;