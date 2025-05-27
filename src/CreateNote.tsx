import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Col, Row, Form, Button, Alert } from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";

interface Group {
  id: number;
  name: string;
}

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/my_groups`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setGroups(res.data || []);
      })
      .catch((err) => {
        console.error("Błąd pobierania grup:", err);
      });
  }, [token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!title || !selectedGroupId) {
      setError("Wprowadź tytuł i wybierz grupę.");
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/notes/new`,
        {
          title,
          content,
          groupId: selectedGroupId,
        },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setSuccess("Notatka została utworzona.");
        setTitle("");
        setContent("");
        setSelectedGroupId(null);
      })
      .catch((err) => {
        console.error("Błąd tworzenia notatki:", err);
        setError("Nie udało się utworzyć notatki.");
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
              <Card.Header as="h4">Utwórz nową notatkę</Card.Header>
              <Card.Body>
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tytuł</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Wpisz tytuł notatki"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Treść</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Opcjonalna treść ogłoszenia"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Grupa</Form.Label>
                    <Form.Select
                      value={selectedGroupId || ""}
                      onChange={(e) => setSelectedGroupId(Number(e.target.value))}
                    >
                      <option value="">Wybierz grupę</option>
                      {groups.map((group) => (
                        <option key={group.id} value={group.id}>
                          {group.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Utwórz notatkę
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

export default CreateNote;
