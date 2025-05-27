import React, { useState } from 'react';
import { Accordion, Card, Button, Form, Table, Row, Col, Container } from 'react-bootstrap';
import { Grade } from './model/Grade';
import { Student } from './model/Student';

interface StudentGrades {
  student: Student;
  grades: Grade[];
}

type TeacherGradesProps = {
  students: StudentGrades[];
};

export default function TeacherGrades(/*{ students }: TeacherGradesProps*/) {
  let subject = 'Matematyka';
  let students: StudentGrades[] = [
    {
      student: {
        id: 1,
        email: 'kamil@wp.pl',
        firstname: 'Kamil',
        lastname: 'Kowalski'
      },
      grades: [
        {
          id: 1,
          subject: 'Matematyka',
          grade: 5
        },
        {
          id: 2,
          subject: 'Matematyka',
          grade: 4
        }
      ]
    },
    {
      student: {
        id: 2,
        email: 'kamil@wp.pl',
        firstname: 'Anna',
        lastname: 'Nowak'
      },
      grades: [
        {
          id: 1,
          subject: 'Matematyka',
          grade: 5
        },
        {
          id: 2,
          subject: 'Matematyka',
          grade: 4
        },
        {
          id: 2,
          subject: 'Matematyka',
          grade: 4
        }
      ]
    },
    {
      student: {
        id: 3,
        email: 'kamil@wp.pl',
        firstname: 'Anna',
        lastname: 'Nowak'
      },
      grades: [
        {
          id: 1,
          subject: 'Matematyka',
          grade: 5
        },
        {
          id: 2,
          subject: 'Matematyka',
          grade: 4
        },
        {
          id: 2,
          subject: 'Matematyka',
          grade: 4
        }
      ]
    },
    {
      student: {
        id: 4,
        email: 'kamil@wp.pl',
        firstname: 'Anna',
        lastname: 'Nowak'
      },
      grades: [
        {
          id: 1,
          subject: 'Matematyka',
          grade: 5
        }
      ]
    },
    {
      student: {
        id: 5,
        email: 'kamil@wp.pl',
        firstname: 'Piotr',
        lastname: 'Kowalski'
      },
      grades: [
        {
          id: 1,
          subject: 'Matematyka',
          grade: 5
        },
        {
          id: 2,
          subject: 'Matematyka',
          grade: 4
        },
        {
          id: 3,
          subject: 'Matematyka',
          grade: 3
        }
      ]
    },
    {
      student: {
        id: 6,
        email: 'kamil@wp.pl',
        firstname: 'Jan',
        lastname: 'Nowak'
      },
      grades: [
        {
          id: 1,
          subject: 'Matematyka',
          grade: 2
        },
        {
          id: 2,
          subject: 'Matematyka',
          grade: 5
        },
        {
          id: 3,
          subject: 'Matematyka',
          grade: 4
        }
      ]
    },
  ];

  const handleAddGrade = (studentId: number, newGrade: Grade) => {
    
  };

  const handleEditGrade = (studentId: number, gradeIndex: number, updatedGrade: Grade) => {
    
  };

  const handleRemoveGrade = (studentId: number, gradeIndex: number) => {
    
  };

  return (
    <Container style={{ backgroundColor: 'white' }}>
      <h2>Matematyka</h2>
      <hr />
      <Row xs={1} md={3} lg={4} className="g-4">
        {students.map(({ student, grades }, studentIndex) => (
          <Col key={studentIndex}>
            <Card>
              <Card.Header>
                <Card.Title>{student.firstname} {student.lastname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {grades.length} {grades.length === 1 ? 'ocena' : 'oceny'}
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th colSpan={3}>Ocena</th>
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
                      <td colSpan={2}>{(grades.reduce((sum, { grade }) => sum + grade, 0) / grades.length).toFixed(1)}</td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="primary" onClick={() => handleAddGrade(student.id, { id: 0, subject: grades[0].subject, grade: 0 })}>Dodaj</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Button variant="outline-secondary" size="lg" className="rounded" style={{ width: '100px', height: '100px', lineHeight: '40px', fontSize: '40px' }}>
                +
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
