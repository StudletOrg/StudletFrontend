import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";

interface Grade {
  id: number;
  value: number;
  group: number;
}

interface Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dateofbirth: string;
  roles: string[];
}

function AllGrades() {
  const [student, setStudent] = useState<Student | null>(null);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [groupedGrades, setGroupedGrades] = useState<Record<number, Grade[]>>({});
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/current_user`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
      const userData = res.data;
      setStudent(userData);

      // Pobranie ocen
      return axios.get(`${process.env.REACT_APP_API_URL}/api/student/${userData.id}/allgrades`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }).then(res => {
      setGrades(res.data);

      // Grupowanie ocen po group ID
      const grouped: Record<number, Grade[]> = {};
      res.data.forEach((grade: Grade) => {
        if (!grouped[grade.group]) {
          grouped[grade.group] = [];
        }
        grouped[grade.group].push(grade);
      });

      setGroupedGrades(grouped);
      setLoading(false);
    }).catch(error => {
      console.error("Błąd podczas ładowania danych:", error);
    });
  }, [token]);

  if (loading) return <p className="loading">Ładowanie...</p>;
  if (!student) return <p>Nie znaleziono danych użytkownika.</p>;

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
              <Card.Header as="h4">Wszystkie oceny studenta</Card.Header>
              <Card.Body>
                {Object.entries(groupedGrades).map(([groupId, grades]) => (
                  <div key={groupId} className="mb-3">
                    <h5>{groupId}</h5>
                    <ListGroup>
                      {grades.map(grade => (
                        <ListGroup.Item key={grade.id}>
                          Ocena: <strong>{grade.value}</strong>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllGrades;
