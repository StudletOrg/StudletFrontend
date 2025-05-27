import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, Col, Row, Button, ListGroup, Alert, Form } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";

interface Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

function AddStudentToGroup() {
  const [searchParams] = useSearchParams();
  const groupId = searchParams.get("groupId");
  const fieldOfStudyId = searchParams.get("fieldOfStudyId");

  const [students, setStudents] = useState<Student[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!fieldOfStudyId) {
      setError("Brak informacji o kierunku.");
      return;
    }

    axios.get(`${process.env.REACT_APP_API_URL}/api/field/${fieldOfStudyId}/group/${groupId}/students`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setStudents(res.data || []);
    }).catch((err) => {
      console.error("Błąd pobierania studentów:", err);
      setError("Nie udało się pobrać listy studentów.");
    });
  }, [token, fieldOfStudyId]);

  const handleAddToGroup = (studentId: number) => {
    if (!groupId) {
      setError("Brak informacji o grupie.");
      return;
    }

    setMessage(null);
    setError(null);

    axios.post(
      `${process.env.REACT_APP_API_URL}/api/groups/${groupId}/students/add`,
      { studentIds: [studentId] },
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(() => {
      setMessage("Student został dodany do grupy.");
    }).catch((err) => {
      console.error("Błąd dodawania studenta:", err);
      setError("Nie udało się dodać studenta.");
    });
  };

  // Filtrowanie po imieniu, nazwisku i emailu (case insensitive)
  const filteredStudents = students.filter((student) => {
    const search = filterText.toLowerCase();
    return (
      student.firstname.toLowerCase().includes(search) ||
      student.lastname.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search)
    );
  });

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
              <Card.Header as="h4">Dodaj studenta do grupy</Card.Header>
              <Card.Body>
                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                {/* Pole wyszukiwania */}
                <Form.Group className="mb-3" controlId="searchStudents">
                  <Form.Control
                    type="text"
                    placeholder="Szukaj po imieniu, nazwisku lub emailu..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                  />
                </Form.Group>

                <ListGroup>
                  {filteredStudents.map((student) => (
                    <ListGroup.Item key={student.id} className="d-flex justify-content-between align-items-center">
                      <div>
                        {student.firstname} {student.lastname} ({student.email})
                      </div>
                      <Button variant="outline-primary" onClick={() => handleAddToGroup(student.id)}>
                        Zapisz do grupy
                      </Button>
                    </ListGroup.Item>
                  ))}
                  {filteredStudents.length === 0 && (
                    <ListGroup.Item>Brak studentów spełniających kryteria wyszukiwania.</ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddStudentToGroup;
