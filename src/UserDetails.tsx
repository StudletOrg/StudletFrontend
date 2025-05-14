import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import AppNavbar from "./AppNavbar";

export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dateofbirth: string; // Date jako string, bo przychodzi z backendu
  roles: string[];
}

function UserDetails() {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/current_user`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Błąd pobierania danych użytkownika:", error);
      });
  }, [token]);

  if (loading) return <p>Ładowanie...</p>;
  if (!student) return <p>Nie znaleziono danych użytkownika.</p>;

  return (
    <>
      <AppNavbar onLogout={() => {}} />
      <Container className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-sm">
              <Card.Header as="h4">Dane użytkownika</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>ID:</strong> {student.id}</ListGroup.Item>
                <ListGroup.Item><strong>Imię:</strong> {student.firstname}</ListGroup.Item>
                <ListGroup.Item><strong>Nazwisko:</strong> {student.lastname}</ListGroup.Item>
                <ListGroup.Item><strong>Data urodzenia:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</ListGroup.Item>
                <ListGroup.Item><strong>Email:</strong> {student.email}</ListGroup.Item>
                <ListGroup.Item><strong>Role:</strong> {student.roles.join(", ")}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserDetails;
