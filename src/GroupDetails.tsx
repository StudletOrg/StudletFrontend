import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Group } from './model/Group';
import React from 'react';
import {
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import AppNavbar from './AppNavbar';
import SideMenu from './SideMenu';

/**
 * GroupDetails component that displays information about a specific group.
 * 
 * This component fetches and displays details of a group, including the group ID,
 * number of students, subject, professor information, grades, and announcements.
 * It handles loading states and error handling for API requests.
 * 
 * @component
 * @returns {JSX.Element} The rendered GroupDetails component, which shows group 
 *                        information, grades, and announcements.
 */
function GroupDetails() {
  const { groupId } = useParams();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [grades, setGrades] = useState([]);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/groups/${groupId}`, {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      setGroup(res.data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Błąd pobierania szczegółów grupy:", error);
    });
  }, [token, groupId]);

  useEffect(() => {
    if (groupId) {
      const studentId = -1;
      axios.get(`${process.env.REACT_APP_API_URL}/api/student/${studentId}/subject/${groupId}/grades`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        setGrades(res.data);
      })
      .catch(error => {
        console.error("Błąd pobierania ocen:", error);
      });
    }
  }, [groupId, token]);

  if (loading) return <p className="loading">Ładowanie...</p>;
  if (!group) return <p>Nie znaleziono grupy.</p>;

  return (
    <>
      <AppNavbar onLogout={() => { }} />
      <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
        <Row className="h-100">
          <Col lg={2} className="bg-light border-end p-3">
            <SideMenu />
          </Col>

          <Col lg={10}>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Card className="shadow-sm mb-4">
                  <Card.Header as="h4">Grupa {group.groupNumber}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item><strong>ID grupy:</strong> {group.groupId}</ListGroup.Item>
                    <ListGroup.Item><strong>Liczba studentów:</strong> {group.studentCount}</ListGroup.Item>
                    <ListGroup.Item><strong>Przedmiot:</strong> {group.subject}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Title>Profesor prowadzący</Card.Title>
                    {group.professor?.firstName || group.professor?.lastName || group.professor?.email ? (
                      <>
                        <Card.Text>{group.professor.firstName ?? 'Brak imienia'} {group.professor.lastName ?? 'Brak nazwiska'}</Card.Text>
                        <Card.Text>{group.professor.email ?? 'Brak adresu e-mail'}</Card.Text>
                      </>
                    ) : (
                      <Card.Text>Brak przypisanego profesora</Card.Text>
                    )}
                  </Card.Body>
                </Card>

                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <Card.Title>Twoje oceny</Card.Title>
                    {grades.length > 0 ? (
                      <ListGroup>
                        {grades.map((grade: any) => (
                          <ListGroup.Item key={grade.id}>
                            <strong>Ocena:</strong> {grade.value}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    ) : (
                      <Card.Text>Brak ocen dla tej grupy.</Card.Text>
                    )}
                  </Card.Body>
                </Card>

                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Ogłoszenia</Card.Title>
                    {group.notes && group.notes.length > 0 ? (
                      <ListGroup>
                        {group.notes.map((note: any) => (
                          <ListGroup.Item key={note.id}>
                            <h5>{note.title}</h5>
                            <p className="mb-1 text-muted">{note.creationDate}</p>
                            <p>{note.content}</p>
                            <small>Autor: {note.author.firstName} {note.author.lastName}</small>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    ) : (
                      <Card.Text>Brak ogłoszeń dla tej grupy.</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GroupDetails;
