import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Group } from './model/Group';
import React from 'react';
import { Card, Col, Container, ListGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "./img/logo32.png";
import Logo from "./Logo";
import FontSizeChanger from "./FontSizeChanger";

function GroupDetails() {
  const { groupId } = useParams();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('jwtToken');

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/groups/${groupId}`, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log("Oceny:", res.data);
      setGroup(res.data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Błąd pobierania przedmiotów:", error);
    });
  }, [token]);

  if (loading) return <p>Ładowanie...</p>;
  if (!group) return <p>Nie znaleziono grupy.</p>;

  return (
    <>
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
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default GroupDetails;