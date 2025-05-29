import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, Form, Button, Alert } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";
import { useParams } from "react-router-dom";

/**
 * A React component for adding a grade for a specific student in a specific group.
 * 
 * This component retrieves the group ID and student ID from the URL parameters,
 * allows the user to select a grade from a dropdown, and submits the grade to the server.
 * It handles success and error messages based on the submission result.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 * 
 * @example
 * // Usage
 * <AddGrade />
 * 
 * @state {number | ""} gradeValue - The selected grade value, which can be a number or an empty string.
 * @state {string | null} success - A message indicating successful grade addition, or null if no message.
 * @state {string | null} error - A message indicating an error during grade addition, or null if no message.
 * 
 * @param {string} groupId - The ID of the group retrieved from the URL parameters.
 * @param {string} studentId - The ID of the student retrieved from the URL parameters.
 */
function AddGrade() {
  const { groupId, studentId } = useParams();
  const [gradeValue, setGradeValue] = useState<number | "">("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("jwtToken");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!groupId || !studentId || gradeValue === "") {
      setError("Uzupełnij wszystkie wymagane pola.");
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/grades/add`,
        {
          studentId: Number(studentId),
          groupId: Number(groupId),
          value: Number(gradeValue),
        },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setSuccess("Ocena została dodana.");
        setGradeValue("");
      })
      .catch((err) => {
        console.error("Błąd dodawania oceny:", err);
        setError("Nie udało się dodać oceny.");
      });
  };

  return (
    <>
      <AppNavbar onLogout={() => {}} />
      <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
        <Row className="h-100">
          <Col lg={2} className="bg-light border-end p-3">
            <SideMenu />
          </Col>
          <Col lg={10}>
            <Card className="shadow-sm">
              <Card.Header as="h4">Dodaj ocenę</Card.Header>
              <Card.Body>
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>ID Grupy</Form.Label>
                    <Form.Control type="text" value={groupId} disabled />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>ID Studenta</Form.Label>
                    <Form.Control type="text" value={studentId} disabled />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Ocena</Form.Label>
                    <Form.Select
                      value={gradeValue}
                      onChange={(e) =>
                        setGradeValue(e.target.value === "" ? "" : Number(e.target.value))
                      }
                    >
                      <option value="">Wybierz ocenę</option>
                      {[2, 2.5, 3, 3.5, 4, 4.5, 5].map((val) => (
                        <option key={val} value={val}>
                          {val}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Dodaj ocenę
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

export default AddGrade;
