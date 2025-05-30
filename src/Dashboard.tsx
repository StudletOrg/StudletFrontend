import React, { useState } from "react";
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Spinner } from "react-bootstrap";
import logo from "./img/logo32.png";
import Logo from "./Logo";
import DashboardCard from "./DashboardCard";
import { Grade } from "./model/Grade";
import FontSizeChanger, { FontSizeType } from "./FontSizeChanger";
import axios from 'axios';
import { Link } from "react-router-dom";
import AppNavbar, { ThisStudent } from "./AppNavbar";
import SideMenu from "./SideMenu";
import { useCookies } from "react-cookie";

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
  const [loading, setLoading] = useState(true);

  const [fontSizeCookie, setFontSizeCookie, removeFontSizeCookie] = useCookies(['fontSize']);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/student/mygrades`, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setGrades(response.data);
      setLoading(false);
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
      setSubjects(response.data);
    })
    .catch(error => {
      console.error("Błąd pobierania przedmiotów:", error);
    });
  }, [token]);

   if (loading) return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Ładowanie...</span>
      </Spinner>
    </Container>
  );
  
  return <>
    <AppNavbar onLogout={() => {  }} />
    <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
      <Row className="h-100">
        <Col lg={["extralarge", "large"].find(c => c == fontSizeCookie.fontSize) ? 3 : 2} className="bg-light border-end p-3">
          <SideMenu />
        </Col>
        <Col
          lg={["extralarge", "large"].includes(fontSizeCookie.fontSize) ? 9 : 10}
        >
          {(grades.length === 0 && subjects.length === 0) ? (
            <h2 className="text-muted text-center">Witaj w Studlecie</h2>
          ) : (
            <Row className="w-100">
              <Col lg={4}>
                <DashboardLatestGrades grades={grades} />
              </Col>
              <Col lg={4}>
                <DashboardSubjects subjects={subjects} />
              </Col>
              <Col lg={4}>
                <DashboardLatestGrades grades={grades} />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  </>;
}

export default Dashboard;
