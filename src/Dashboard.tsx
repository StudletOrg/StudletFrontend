import React from "react";
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "./img/logo32.png";
import Logo from "./Logo";
import DashboardCard from "./DashboardCard";
import { Grade } from "./model/Grade";
import FontSizeChanger from "./FontSizeChanger";
import axios from 'axios';
import { Link } from "react-router-dom";

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

export interface Subject {
  id: number;
  nazwa: string;
}

export interface DashboardSubjectsProp {
  subjects?: Subject[];
}

function DashboardSubjects(prop: DashboardSubjectsProp) {
  return <DashboardCard title="Zajęcia" body={
    <Card.Text>
      {prop.subjects?.map((subject, index) => (
        <div key={index}>
          <Link to={`/groups/${subject.id}`}>{subject.nazwa}</Link>
        </div>
      ))}
    </Card.Text>
  } />;
}

function Dashboard() {
  const [grades, setGrades] = React.useState<Grade[]>([]);
  const [subjects, setSubjects] = React.useState<Subject[]>([]);
  const token = localStorage.getItem('jwtToken');

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/student/mygrades`, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setGrades(response.data);
    })
    .catch(error => {
      console.error("Błąd pobierania ocen:", error);
    });
  }, [token]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/student/mysubjects`, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log("Oceny:", response.data);
      setSubjects(response.data);
    })
    .catch(error => {
      console.error("Błąd pobierania przedmiotów:", error);
    });
  }, [token]);
  
  return <>
    <Navbar expand="lg" className="bg-body-tertiary mb-2 mt-2 rounded-1 shadow-lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Zalogowano jako:&nbsp;
          </Navbar.Text>
          <Nav.Link className="me-2" style={{ fontWeight: "bold", textDecoration: "underline" }}>Jan Kowalski</Nav.Link>
          <div className="vr me-2"></div>
          <Nav.Link className="me-2" onClick={() => { }}>Wyloguj</Nav.Link>
          <FontSizeChanger />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
      <Row>
        <Col lg={4}>
          <DashboardLatestGrades grades={grades} />
        </Col>
        <Col lg={4}>
          <DashboardSubjects subjects={subjects} />
        </Col>
        <Col lg={4}>
          <DashboardLatestGrades grades={grades}  />
        </Col>
      </Row>
    </Container>
  </>;
}

export default Dashboard;
