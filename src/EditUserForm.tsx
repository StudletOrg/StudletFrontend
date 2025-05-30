import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, Form, Button, Spinner, Alert } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";


/**
 * Represents a student user.
 * @interface Student
 * @property {number} id - The unique identifier for the student.
 * @property {string} firstname - The first name of the student.
 * @property {string} lastname - The last name of the student.
 * @property {string} email - The email address of the student.
 * @property {string} dateofbirth - The date of birth of the student as a string.
 * @property {string[]} roles - An array of roles assigned to the student.
 */
export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dateofbirth: string;
  roles: string[];
}

function EditUserForm() {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
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
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Błąd pobierania danych:", err);
        setError("Nie udało się pobrać danych użytkownika.");
        setLoading(false);
      });
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!student) return;

    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/user/${student.id}`,
        { firstname, lastname, password },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess(true);
    } catch (err) {
      console.error("Błąd zapisu:", err);
      setError("Nie udało się zaktualizować danych.");
    }
  };

  if (loading) return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="primary" role="status" />
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
              <Card.Header as="h4">Edytuj dane użytkownika</Card.Header>
              <Card.Body>
                {success && <Alert variant="success">Dane zaktualizowane pomyślnie!</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Imię</Form.Label>
                    <Form.Control
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Nazwisko</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Nowe hasło</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Pozostaw puste, jeśli nie zmieniasz"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Zapisz zmiany
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditUserForm;
