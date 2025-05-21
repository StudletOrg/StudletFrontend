import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";

interface Professor {
  firstName: string;
  lastName: string;
  email: string;
}

interface StudentGroup {
  groupNumber: string;
  professor: Professor;
  studentCount: number;
  subject: string;
}

function StudentGroups() {
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="loading">Ładowanie...</p>;

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
                      </ListGroup>
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
