import { useNavigate } from 'react-router-dom';
import logo from './img/logo32.png';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie';

interface LoginResponseData {
  token: string
}

function LoginForm() {
  let [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);
  let [email, setEmail] = React.useState<string>('');
  let [password, setPassword] = React.useState<string>('');
  let [rememberMe, setRememberMe] = React.useState<boolean>(false);

  const [emailError, setEmailError] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');

  const onSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

    validate(email.length == 0, setEmailError, 'E-mail jest wymagany');
    validate(password.length == 0, setPasswordError, 'Hasło jest wymagane');

    if (!validationError) {
      axios.post(process.env.REACT_APP_API_URL + '/api/login', {
        email: email,
        password: password
      }).then((response) => {
        if (response.status === 200) {
          const data = response.data as LoginResponseData;
          setCookie('jwtToken', data.token, {
            path: '/',
            expires: rememberMe ? new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) : undefined // 365 dni na wygasniecie ciasteczka
          });
        }
        else {
          // Coś tu chyba powinno sie znajdować
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="text-center p-2">
            <h4 className="card-title text-center d-flex flex-row justify-content-center align-items-center">
              <img src={logo} alt="logo" className="rounded me-2" />
              <span>Studlet</span>
            </h4>
          </Card.Title>
          <Card.Text>
            <Form noValidate onSubmit={onSubmitClick}>
              <Form.Group className='mb-3'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value)} required />
                {emailError.length > 0 && <Form.Text className='text-danger'>{emailError}</Form.Text>}
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} required />
                {passwordError.length > 0 && <Form.Text className='text-danger'>{passwordError}</Form.Text>}
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Check type="checkbox" label="Zapamietaj mnie" id='rememberme' onChange={e => setRememberMe(e.target.checked)} checked={rememberMe}/>
              </Form.Group>
              <Button type="submit" variant="primary" style={{ width: '100%' }}>Zaloguj</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
