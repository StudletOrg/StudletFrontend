import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, ListGroup, Spinner, Button } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";

/**
 * Interface representing a professor's details.
 * 
 * @interface Professor
 * @property {string} firstName - The first name of the professor.
 * @property {string} lastName - The last name of the professor.
 * @property {string} email - The email address of the professor.
 */
interface Professor {
  firstName: string;
  lastName: string;
  email: string;
}

interface Attendance {
  value: number;
  maksvalue: number;
}

/**
 * Interface representing a student group's details.
 * 
 * @interface StudentGroup
 * @property {string} groupNumber - The number of the student group.
 * @property {Professor} professor - The professor assigned to the group.
 * @property {number} studentCount - The number of students in the group.
 * @property {string} subject - The subject of the group.
 */
interface StudentGroup {
  groupNumber: string;
  professor: Professor;
  studentCount: number;
  subject: string;
  attendance?: Attendance | null;
}

/**
 * StudentGroups component that displays the groups a student is assigned to.
 * 
 * This component fetches and displays the student's groups, including details 
 * about the group number, professor, and student count. It handles loading 
 * states and displays a message if no groups are found.
 * 
 * @component
 * @returns {JSX.Element} The rendered StudentGroups component, which shows 
 *                        the student's assigned groups.
 */
function StudentGroups() {
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/groups/student-groups`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroups(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Błąd ładowania grup studenta:", err);
      });
  }, [token]);

   if (loading) return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Ładowanie...</span>
      </Spinner>
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
              <Card.Header as="h4">Twoje grupy zajęciowe</Card.Header>
              <Card.Body>
                {groups.length === 0 ? (
                  <p>Nie jesteś przypisany do żadnych grup.</p>
                ) : (
                  groups.map((group, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="mb-4">{group.subject}</h3>
                      <ListGroup>
                        <ListGroup.Item><strong>Grupa:</strong> {group.groupNumber}</ListGroup.Item>
                        <ListGroup.Item><strong>Profesor:</strong> {group.professor.firstName} {group.professor.lastName} ({group.professor.email})</ListGroup.Item>
                        <ListGroup.Item><strong>Liczba studentów:</strong> {group.studentCount}</ListGroup.Item>
                        {group.attendance ? (
                          <ListGroup.Item>
                            <strong>Frekwencja:</strong> {group.attendance.value} / {group.attendance.maksvalue} (
                            {Math.round((group.attendance.value / group.attendance.maksvalue) * 100)}%)
                          </ListGroup.Item>
                        ) : (
                          <ListGroup.Item>
                            <strong>Frekwencja:</strong> brak danych
                          </ListGroup.Item>
                        )}
                      </ListGroup>
                      <div className="mt-3 text-center">
                        <Button variant="primary" onClick={() => navigate(`/groups/${group.groupNumber}`)}>
                          Zobacz
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StudentGroups;
