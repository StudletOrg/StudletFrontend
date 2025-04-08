import { useNavigate } from "react-router-dom";
import logo from "./img/logo32.png";
import React from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { emailRegex, passwordRegex } from "./Validation";
import axios from "axios";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: RoleType;
};

export type RegisterFormProps = {
  onRegister?: (data: RegisterData) => void;
  onCancel?: () => void;
};

export type RoleType = "student" | "teacher" | "moderator";

function RegisterForm({ onRegister, onCancel }: RegisterFormProps) {
  const [firstnameError, setFirstnameError] = React.useState<string>('');
  const [lastnameError, setLastnameError] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState<string>('');
  const [responseError, setResponseError] = React.useState<string>('');

  const [firstname, setFirstname] = React.useState<string>('');
  const [lastname, setLastname] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [role, setRole] = React.useState<RoleType>("student");

  const onCancelClick = () => {
    onCancel && onCancel();
  };

  const onSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let validationError = false;
    function validate(condition: boolean, setFunc: React.Dispatch<React.SetStateAction<string>>, message: string) {
      if (condition) {
        setFunc(message);
        validationError = true;
      }
      else {
        setFunc('');
      }
    };

    validate(firstname.length == 0, setFirstnameError, 'Imie jest wymagane');
    validate(lastname.length == 0, setLastnameError, 'Nazwisko jest wymagane');
    validate(password.length == 0, setPasswordError, 'Hasło jest wymagane');
    validate(!passwordRegex.test(password), setPasswordError, 'Niepoprawny format hasła');
    validate(password != confirmPassword, setConfirmPasswordError, 'Hasła nie zgadzają się');
    validate(!emailRegex.test(email), setEmailError, 'Niepoprawny format e-maila');

    if (!validationError) {
      // TODO: pełne zaimplementowanie rejestracji
      const data = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        role: role
      } as RegisterData;

      axios.post(process.env.REACT_APP_API_URL + '/api/register', data).then((response) => {
        if (response.status == 201) {
          onRegister && onRegister(data);
        }
        else {
          setResponseError(response.data.message);
        }
      }).catch((error) => {
        console.log(error);
      });
    }
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
            <Form noValidate onSubmit={onSubmitClick}>
              <Form.Group className='mb-3'>
                <Form.Label>Imię / Imiona</Form.Label>
                <Form.Control type="text" onChange={e => setFirstname(e.target.value)} required />
                {firstnameError.length > 0 && <Form.Label className="text-danger">{firstnameError}</Form.Label>}
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control type="text" onChange={e => setLastname(e.target.value)} required />
                {lastnameError.length > 0 && <Form.Label className="text-danger">{lastnameError}</Form.Label>}
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value)} required />
                {emailError.length > 0 && <Form.Label className="text-danger">{emailError}</Form.Label>}
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} required />
                {passwordError.length > 0 && <Form.Label className="text-danger">{passwordError}</Form.Label>}
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Potwierdzenie hasła</Form.Label>
                <Form.Control type="password" onChange={e => setConfirmPassword(e.target.value)} required />
                {confirmPasswordError.length > 0 && <Form.Label className="text-danger">{confirmPasswordError}</Form.Label>}
              </Form.Group>
              <ButtonGroup className="mb-3 w-100">
                <Button variant={`${role === "student" ? "primary" : "outline-primary"}`} onClick={() => setRole("student")}>Student</Button>
                <Button variant={`${role === "teacher" ? "primary" : "outline-primary"}`} onClick={() => setRole("teacher")}>Nauczyciel</Button>
                <Button variant={`${role === "moderator" ? "primary" : "outline-primary"}`} onClick={() => setRole("moderator")}>Moderator</Button>
              </ButtonGroup>
              {responseError.length > 0 && <Form.Label className="text-danger">{responseError}</Form.Label>}
              <Container>
                <Row className="mt-3 d-flex flex-row justify-content-between gap-2">
                  <Col className="p-0"><Button type="submit" variant="primary" className="w-100">Zarejestruj</Button></Col>
                  <Col className="p-0"><Button type="button" variant="secondary" className="w-100" onClick={() => onCancelClick()}>Anuluj</Button></Col>
                </Row>
              </Container>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterForm;
