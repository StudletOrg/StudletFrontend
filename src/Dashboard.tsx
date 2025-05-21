import React from "react";
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "./img/logo32.png";
import Logo from "./Logo";
import DashboardCard from "./DashboardCard";
import { Grade } from "./model/Grade";
import FontSizeChanger from "./FontSizeChanger";
import axios from 'axios';
import { Link } from "react-router-dom";
import AppNavbar, { Student } from "./AppNavbar";
import SideMenu from "./SideMenu";

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
    <AppNavbar onLogout={() => {  }} />
    <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
      <Row className="h-100">
        <Col lg={2} className="bg-light border-end p-3">
          <SideMenu />
        </Col>
        <Col lg={10}>
          <Row>
            <Col lg={3}>
              <DashboardLatestGrades grades={grades} />
            </Col>
            <Col lg={4}>
              <DashboardSubjects subjects={subjects} />
            </Col>
            <Col lg={3}>
              <DashboardLatestGrades grades={grades} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>;
}

export default Dashboard;
