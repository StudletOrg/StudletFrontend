import React from "react";
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "./img/logo32.png";
import Logo from "./Logo";
import DashboardCard from "./DashboardCard";
import { Grade } from "./model/Grade";

interface DashboardLatestGradesProp {
  grades?: Grade[]
}

function DashboardLatestGrades(prop: DashboardLatestGradesProp) {
  return <DashboardCard title="Ostatnie oceny" body={
    <Card.Text>
      {prop.grades?.map((grade, index) => (
        <div key={index}>
          {grade.subject}: {grade.grade}
        </div>
      ))}
    </Card.Text>
  } />;
}

interface DashboardSubjectsProp {
  subjects?: string[]
}

function DashboardSubjects(prop: DashboardSubjectsProp) {
  return <DashboardCard title="Zajęcia" body={
    <Card.Text>
      {prop.subjects?.map((subject, index) => (
        <div key={index}>
          {subject}
        </div>
      ))}
    </Card.Text>
  } />;
}

function Dashboard() {
  return <>
    <Navbar expand="lg" className="bg-body-tertiary mb-2 mt-2 rounded-1 shadow-lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Zalogowano jako:&nbsp;
          </Navbar.Text>
          <Nav.Link className="me-2" style={{ fontWeight: "bold", textDecoration: "underline" }}>Jan Kowalski</Nav.Link>
          <div className="vr me-2"></div>
          <Nav.Link onClick={() => { }}>Wyloguj</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
      <Row>
        <Col lg={4}>
          <DashboardLatestGrades grades={[
            { subject: "Matematyka", grade: 5 },
            { subject: "Język angielski", grade: 4 },
            { subject: "Język polski", grade: 5 }
          ]} />
        </Col>
        <Col lg={4}>
          <DashboardSubjects subjects={[
            "Matematyka", "Język angielski", "Język polski"
          ]} />
        </Col>
        <Col lg={4}>
          <DashboardLatestGrades grades={[
            { subject: "Matematyka", grade: 5 },
            { subject: "Język angielski", grade: 4 },
            { subject: "Język polski", grade: 5 }
          ]} />
        </Col>
      </Row>
    </Container>
  </>;
}

export default Dashboard;
