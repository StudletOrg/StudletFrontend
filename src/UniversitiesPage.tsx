import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner, ListGroup, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import SideMenu from './SideMenu';

/**
 * Represents a field of study.
 * 
 * @interface FieldOfStudy
 * @property {number} id - The unique identifier for the field of study.
 * @property {string} name - The name of the field of study.
 */
interface FieldOfStudy {
  id: number;
  name: string;
}

/**
 * Represents a rector with personal information.
 * 
 * @interface Rector
 * @property {number} id - The unique identifier for the rector.
 * @property {string} firstname - The first name of the rector.
 * @property {string} lastname - The last name of the rector.
 */
interface Rector {
  id: number;
  firstname: string;
  lastname: string;
}

/**
 * Represents a university with its details, rector, and offered fields of study.
 * 
 * @interface University
 * @property {number} id - The unique identifier for the university.
 * @property {string} name - The name of the university.
 * @property {string} address - The address of the university.
 * @property {Rector | null} rector - The rector of the university, or null if none assigned.
 * @property {FieldOfStudy[]} fieldOfStudy - An array of fields of study offered by the university.
 */
interface University {
  id: number;
  name: string;
  address: string;
  rector: Rector | null;
  fieldOfStudy: FieldOfStudy[];
}


export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const token = localStorage.getItem("jwtToken");

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    api.get('/api/universities')
      .then((res) => {
        setUniversities(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Błąd pobierania uczelni:', err);
        setLoading(false);
      });

      api.get('/api/user/current_user')
      .then((res) => {
        setCurrentUserId(res.data.id);
      })
      .catch((err) => {
        console.error('Błąd pobierania danych użytkownika:', err);
      });
  }, []);

  return (
    <>
      <AppNavbar onLogout={() => {}} />
      <Container fluid className="bg-body-tertiary vh-100 p-3 rounded-1 shadow-lg">
        <Row className="h-100">
          <Col lg={2} className="bg-light border-end p-3">
            <SideMenu />
          </Col>
          <Col lg={10}>
            <h2 className="mb-4">Lista uczelni</h2>
            {loading ? (
              <Spinner animation="border" />
            ) : (
              <Row className="g-4">
                {universities.map((uni) => (
                  <Col key={uni.id} xs={12}>
                    <Card className="w-100">
                      <Card.Header className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title>{uni.name}</Card.Title>
                          <p className="mb-0">{uni.address}</p>
                        </div>
                        {currentUserId && uni.rector?.id === currentUserId && (
                          <Button
                            variant="warning"
                            onClick={() => navigate(`/universities/${uni.id}/manage`)}
                          >
                            Zarządzaj
                          </Button>
                        )}
                      </Card.Header>
                      <Card.Body>
                        {uni.fieldOfStudy?.length === 0 ? (
                          <p className="text-muted">Brak kierunków</p>
                        ) : (
                          <ListGroup>
                            {uni.fieldOfStudy?.map((field) => (
                              <ListGroup.Item key={field.id} className="d-flex justify-content-between align-items-center">
                                <span>{field.name}</span>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  onClick={() => navigate(`/fields/${field.id}`)}
                                >
                                  Zobacz
                                </Button>
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
