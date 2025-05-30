import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Card,
  Col,
  Row,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import AppNavbar from "./AppNavbar";
import SideMenu from "./SideMenu";


/**
 * A React component for creating a new group of students.
 * This component retrieves the list of subjects and their instances from the server,
 * allows the user to select a subject instance and one or more students, and submits the selected
 * data to the server to be added to the group.
 * It handles success and error messages based on the submission result.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @state {string} numer - The number of the group to be created.
 * @state {number | ""} subjectInstanceId - The identifier of the subject instance to which the group is associated.
 * @state {number[]} studentIds - An array of identifiers of the students to be added to the group.
 * @state {string | null} success - A message indicating successful group creation, or null if no message.
 * @state {string | null} error - A message indicating an error during group creation, or null if no message.
 * @param {string} token - The user's JWT token for authentication.
 */
function CreateGroup() {
  const [numer, setNumer] = useState("");
  const [subjectInstanceId, setSubjectInstanceId] = useState<number | "">("");
  const [studentIds, setStudentIds] = useState<number[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("jwtToken");

    useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/api/my-subject-of-instances`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
        })
        .then((res) => {
            setSubjects(res.data);
            console.log(res.data);
        })
        .catch((err) => {
        console.error("Błąd pobierania przedmiotów:", err);
        setError("Nie udało się pobrać przedmiotów.");
        });

    axios
        .get(`${process.env.REACT_APP_API_URL}/api/allstudents`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
        })
        .then((res) => setStudents(res.data))
        .catch((err) => {
        console.error("Błąd pobierania studentów:", err);
        setError("Nie udało się pobrać studentów.");
        });
    }, [token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!numer || subjectInstanceId === "") {
      setError("Uzupełnij wszystkie wymagane pola.");
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/groups`,
        {
          numer,
          subjectInstanceId: Number(subjectInstanceId),
          studentIds,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      )
      .then(() => {
        setSuccess("Grupa została utworzona.");
        setNumer("");
        setSubjectInstanceId("");
        setStudentIds([]);
      })
      .catch((err) => {
        console.error("Błąd tworzenia grupy:", err);
        setError("Nie udało się utworzyć grupy.");
      });
  };

  const toggleStudentSelection = (id: number) => {
    setStudentIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
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
              <Card.Header as="h4">Utwórz nową grupę</Card.Header>
              <Card.Body>
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Numer grupy</Form.Label>
                    <Form.Control
                      type="text"
                      value={numer}
                      onChange={(e) => setNumer(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Przedmiot (instancja)</Form.Label>
                    <Form.Select
                      value={subjectInstanceId}
                      onChange={(e) =>
                        setSubjectInstanceId(e.target.value === "" ? "" : Number(e.target.value))
                      }
                      required
                    >
                      <option value="">Wybierz przedmiot</option>
                      {subjects.map((subj) => (
                        <option key={subj.id} value={subj.id}>
                          {subj.subject.name || `ID ${subj.id}`}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Studenci</Form.Label>
                    {students.map((student) => (
                      <Form.Check
                        key={student.id}
                        type="checkbox"
                        label={`${student.firstName} ${student.lastName}`}
                        checked={studentIds.includes(student.id)}
                        onChange={() => toggleStudentSelection(student.id)}
                      />
                    ))}
                  </Form.Group>

                  <Button type="submit" variant="primary">
                    Utwórz grupę
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

export default CreateGroup;
