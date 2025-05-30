import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, ListGroup, Spinner, Button } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";
import { useNavigate, useParams } from "react-router-dom";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Group {
  id: number;
  number: number;
  professor: User | null;
}

interface Subject {
  id: number;
  name: string;
}

interface SubjectOfInstance {
  id: number;
  coordinator: User | null;
}

interface SubjectDetailsData {
  subject: Subject;
  subjectOfInstance: SubjectOfInstance | null;
  groups: Group[];
}

function SubjectDetails() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [data, setData] = useState<SubjectDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!subjectId) return;

    setLoading(true);
    setError(null);

    axios
      .get<SubjectDetailsData>(`${process.env.REACT_APP_API_URL}/api/subject-details/${subjectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Błąd ładowania szczegółów przedmiotu:", err);
        setError("Nie udało się pobrać danych.");
      })
      .finally(() => setLoading(false));
  }, [subjectId, token]);

  if (loading)
    return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Ładowanie...</span>
        </Spinner>
      </Container>
    );

  if (error)
    return (
      <Container className="p-4">
        <p className="text-danger">{error}</p>
      </Container>
    );

  if (!data)
    return (
      <Container className="p-4">
        <p>Nie znaleziono szczegółów przedmiotu.</p>
      </Container>
    );

  return (
    <>
      <AppNavbar onLogout={() => {}} />
      <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
        <Row className="h-100">
          <Col lg={2} className="bg-light border-end p-3">
            <SideMenu />
          </Col>
          <Col lg={8}>
            <Card className="shadow-sm mb-3">
              <Card.Header as="h4">Przedmiot: {data.subject.name}</Card.Header>
              <Card.Body>
                <p><strong>ID:</strong> {data.subject.id}</p>
              </Card.Body>
            </Card>

            <Card className="shadow-sm mb-3">
              <Card.Header as="h5">Koordynator</Card.Header>
              <Card.Body>
                {data.subjectOfInstance?.coordinator ? (
                  <div>
                    <p>
                      {data.subjectOfInstance.coordinator.firstName} {data.subjectOfInstance.coordinator.lastName}
                    </p>
                    <p>Email: {data.subjectOfInstance.coordinator.email}</p>
                  </div>
                ) : (
                  <p>Brak koordynatora</p>
                )}
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Header as="h5">Grupy</Card.Header>
              <Card.Body>
                {data.groups.length === 0 ? (
                  <p>Brak grup przypisanych do tego przedmiotu.</p>
                ) : (
                  <ListGroup>
                    {data.groups.map((group) => (
                      <ListGroup.Item key={group.id} className="d-flex justify-content-between align-items-center">
                        <div>
                          <strong>Numer grupy:</strong> {group.number}
                          <br />
                          <strong>Profesor:</strong>{" "}
                          {group.professor
                            ? `${group.professor.firstName} ${group.professor.lastName} (${group.professor.email})`
                            : "Brak profesora"}
                        </div>
                        <Button variant="outline-primary" size="sm" onClick={() => navigate(`/groups/${group.id}`)}>
                          Szczegóły grupy
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SubjectDetails;
