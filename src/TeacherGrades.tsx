import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Card, Button, Form, Table, Row, Col, Container, Spinner } from 'react-bootstrap';
import AppNavbar from './AppNavbar';
import SideMenu from './SideMenu';
import { useNavigate } from 'react-router-dom';

interface Grade {
  id: number;
  subject: string;
  grade: number;
}

interface Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

interface StudentGrades {
  student: Student;
  grades: Grade[];
}

interface Group {
  id: number;
  numer: number;
  name: string;
}

export default function TeacherGrades() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [students, setStudents] = useState<StudentGrades[]>([]);
  const [loadingGroups, setLoadingGroups] = useState(true);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const token = localStorage.getItem("jwtToken");

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    api.get('/api/user/my_groups')
      .then((res) => {
        console.log(res.data);
        setGroups(res.data || []);
        setLoadingGroups(false);
      })
      .catch((err) => {
        console.error('Błąd pobierania grup:', err);
        setLoadingGroups(false);
      });
  }, []);

  useEffect(() => {
    if (selectedGroupId === null) return;

    setLoadingStudents(true);
    api.get(`/api/groups/${selectedGroupId}/studentsWithGrades`)
      .then((res) => {
        const mappedData: StudentGrades[] = res.data.map((student: any) => ({
          student: {
            id: student.id,
            firstname: student.firstName,
            lastname: student.lastName,
            email: student.email
          },
          grades: student.grades.map((grade: any) => ({
            id: grade.id,
            subject: grade.subject,
            grade: grade.value
          }))
        }));
        setStudents(mappedData);
        setLoadingStudents(false);
      })
      .catch((error) => {
        console.error('Błąd pobierania uczniów:', error);
        setLoadingStudents(false);
      });
  }, [selectedGroupId]);

  const handleAddGrade = (studentId: number, newGrade: Grade) => {  };

  const handleEditGrade = (studentId: number, gradeIndex: number, updatedGrade: Grade) => {  };

  const handleRemoveGrade = (studentId: number, gradeIndex: number) => {  };

  const navigate = useNavigate();

  return (
      <>
      <AppNavbar onLogout={() => {}} />
      <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
        <Row className="h-100">
          <Col lg={2} className="bg-light border-end p-3">
            <SideMenu />
          </Col>
          <Col lg={10}>
            <h2>Twoje grupy</h2>
            <hr />

            {loadingGroups ? (
              <Spinner animation="border" />
            ) : (
              <Row className="mb-4">
                {groups.map((group) => (
                  <Col key={group.id} xs={6} md={4} lg={3}>
                    <Card
                      bg={selectedGroupId === group.id ? 'primary' : 'light'}
                      text={selectedGroupId === group.id ? 'white' : 'dark'}
                      className="mb-2"
                      onClick={() => setSelectedGroupId(group.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Card.Body>
                        <Card.Title>{group.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

            {selectedGroupId && (
              <>
                <Row className="align-items-center mb-3">
                  <Col>
                    <h3>Oceny uczniów grupy #{selectedGroupId}</h3>
                  </Col>
                  <Col className="text-end">
                    <Button
                      variant="outline-secondary"
                      onClick={() => navigate(`/add-student-to-group?groupId=${selectedGroupId}&fieldOfStudyId=${1}`)}
                    >
                      + Dodaj studenta
                    </Button>
                    <Button
                      variant="outline-primary"
                      onClick={() => navigate("/notes/new")}
                    >
                      + Utwórz notatkę
                    </Button>
                  </Col>
                </Row>
                <hr />
                {loadingStudents ? (
                  <Spinner animation="border" />
                ) : (
                  <Row xs={1} md={2} lg={3} className="g-4">
                    {students.map(({ student, grades }, studentIndex) => (
                      <Col key={studentIndex}>
                        <Card>
                          <Card.Header>
                            <Card.Title>{student.firstname} {student.lastname}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {grades.length === 0
                                ? "brak ocen"
                                : `${grades.length} ${grades.length === 1 ? "ocena" : "oceny"}`}
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Body>
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th colSpan={3}>Oceny</th>
                                </tr>
                              </thead>
                              <tbody>
                                {grades.map((grade, gradeIndex) => (
                                  <tr key={gradeIndex}>
                                    <td>{grade.grade}</td>
                                    <td>
                                      <Button variant="success" size="sm" onClick={() => handleEditGrade(student.id, gradeIndex, { ...grade, grade: 0 })}>Edytuj</Button>
                                    </td>
                                    <td>
                                      <Button variant="danger" size="sm" onClick={() => handleRemoveGrade(student.id, gradeIndex)}>Usuń</Button>
                                    </td>
                                  </tr>
                                ))}
                                <tr>
                                  <td>Średnia</td>
                                  <td colSpan={2}>
                                    {grades.length > 0
                                      ? (grades.reduce((sum, { grade }) => sum + grade, 0) / grades.length).toFixed(1)
                                      : '—'}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                            <Button
                              variant="primary"
                              onClick={() => navigate(`/grades/add/${selectedGroupId}/${student.id}`)}
                            >
                              Dodaj
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
