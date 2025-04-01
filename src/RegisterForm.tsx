import { useNavigate } from "react-router-dom";
import logo from "./img/logo32.png";
import React from "react";
import { Button, ButtonGroup, Card, CardBody, Form, InputGroup } from "react-bootstrap";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterFormProps = {
  onRegister?: (data: RegisterData) => void;
  onCancel?: () => void;
};

export type RoleType = "student" | "teacher" | "moderator";

function RegisterForm({ onRegister, onCancel }: RegisterFormProps) {
  let navigate = useNavigate();
  let firstNameRef = React.useRef<HTMLInputElement>(null);
  let lastNameRef = React.useRef<HTMLInputElement>(null);
  let emailRef = React.useRef<HTMLInputElement>(null);
  let passwordRef = React.useRef<HTMLInputElement>(null);
  let confirmPasswordRef = React.useRef<HTMLInputElement>(null);

  let [role, setRole] = React.useState<RoleType>("student");

  let onSubmitClick = () => {
    const emailValidateRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValidateRegex.test(emailRef.current!.value)) {
      
    }

    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {

    }

    onRegister && onRegister({
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
      confirmPassword: confirmPasswordRef.current!.value
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>
            <h5 className="card-title text-center d-flex flex-row justify-content-center align-items-center">
              <img src={logo} alt="logo" className="rounded me-1" />
              <span>Rejestracja</span>
            </h5>
          </Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Imię / Imiona</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Potwierdzenie hasła</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <ButtonGroup className="mb-3" style={{ width: '100%' }}>
                <Button variant={`${role === "student" ? "primary" : "outline-primary"}`} onClick={() => setRole("student")}>Student</Button>
                <Button variant={`${role === "teacher" ? "primary" : "outline-primary"}`} onClick={() => setRole("teacher")}>Nauczyciel</Button>
                <Button variant={`${role === "moderator" ? "primary" : "outline-primary"}`} onClick={() => setRole("moderator")}>Moderator</Button>
              </ButtonGroup>
              <Button variant="primary" style={{ width: '100%' }} onClick={onSubmitClick}>Zarejestruj</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterForm;
