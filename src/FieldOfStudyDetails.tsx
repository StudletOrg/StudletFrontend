import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, ListGroup, Spinner, Button } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";
import { useNavigate, useParams } from "react-router-dom";

interface Subject {
  id: number;
  name: string;
}

interface FieldOfStudy {
  id: number;
  name: string;
  subjects: Subject[];
}

function FieldOfStudyDetails() {
  const { fieldId } = useParams<{ fieldId: string }>();
  const [field, setField] = useState<FieldOfStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!fieldId) return;

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/field-of-study/${fieldId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setField(res.data);
      })
      .catch((err) => {
        console.error("Błąd ładowania kierunku studiów:", err);
      })
      .finally(() => setLoading(false));
  }, [fieldId, token]);

  if (loading)
    return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Ładowanie...</span>
        </Spinner>
      </Container>
    );

  if (!field)
    return (
      <Container className="p-4">
        <p>Nie znaleziono kierunku studiów.</p>
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
            <Card className="shadow-sm">
              <Card.Header as="h4">Kierunek: {field.name}</Card.Header>
              <Card.Body>
                {field.subjects.length === 0 ? (
                  <p>Brak przypisanych przedmiotów do tego kierunku.</p>
                ) : (
                  <ListGroup>
                    {field.subjects.map((subject) => (
                      <ListGroup.Item key={subject.id} className="d-flex justify-content-between align-items-center">
                        {subject.name}
                        <Button variant="outline-primary" size="sm" onClick={() => navigate(`/subjects/${subject.id}`)}>
                          Szczegóły
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

export default FieldOfStudyDetails;
