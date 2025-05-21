import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Group } from './model/Group';
import React from 'react';
import { Card, Col, Container, ListGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "./img/logo32.png";
import Logo from "./Logo";
import FontSizeChanger from "./FontSizeChanger";
import AppNavbar, {Student} from './AppNavbar';
import SideMenu from './SideMenu';

function GroupDetails() {
  const { groupId } = useParams();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [grades, setGrades] = useState([]);
  const token = localStorage.getItem('jwtToken');

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/groups/${groupId}`, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log("przedmiot:", res.data);
      setGroup(res.data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Błąd pobierania przedmiotów:", error);
    });
  }, [token]);

  useEffect(() => {
    if (groupId) {
      const studentId = -1;
      axios.get(`${process.env.REACT_APP_API_URL}/api/student/${studentId}/subject/${groupId}/grades`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        setGrades(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Błąd pobierania ocen:", error);
      });
    }
  }, [groupId, token]);

  if (loading) return <p className="loading">Ładowanie...</p>;
  if (!group) return <p>Nie znaleziono grupy.</p>;

  return (
    <>
      <AppNavbar onLogout={() => {  }} />
        <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
          <Row className="h-100">
            <Col lg={2} className="bg-light border-end p-3">
              <SideMenu />
            </Col>
            <Col lg={8}>
            {loading ? (
              <p>Ładowanie...</p>
            ) : !group ? (
              <p>Nie znaleziono grupy.</p>
            ) : (
          <Row className="justify-content-center">
              <Col lg={8}>
                <Card className="shadow-sm">
                  <Card.Header as="h4">Grupa {group.groupNumber}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item><strong>ID grupy:</strong> {group.groupId}</ListGroup.Item>
                    <ListGroup.Item><strong>Liczba studentów:</strong> {group.studentCount}</ListGroup.Item>
                    <ListGroup.Item><strong>Przedmiot:</strong> {group.subject}</ListGroup.Item>
                  </ListGroup>
        
                  <Card.Body>
                    <Card.Title>Profesor prowadzący</Card.Title>
                    {group.professor.firstName || group.professor.lastName || group.professor.email ? (
                      <>
                        <Card.Text>{group.professor.firstName ?? 'Brak imienia'} {group.professor.lastName ?? 'Brak nazwiska'}</Card.Text>
                        <Card.Text>{group.professor.email ?? 'Brak adresu e-mail'}</Card.Text>
                      </>
                    ) : (
                      <Card.Text>Brak przypisanego profesora</Card.Text>
                    )}
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Twoje oceny</Card.Title>
                      {grades.length > 0 ? (
                      <ListGroup>
                        {grades.map((grade: any) => (
                          <ListGroup.Item key={grade.id}>
                            <strong>Ocena: </strong>{grade.value}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    ) : (
                      <Card.Text>Brak ocen dla tej grupy.</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GroupDetails;