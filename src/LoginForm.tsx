import { useNavigate } from 'react-router-dom';
import logo from './img/logo32.png';
import { useContext } from 'react';
import { LoginContext } from './App';
import { Button, Card, Form } from 'react-bootstrap';

function LoginForm() {
  let navigate = useNavigate();
  
  const onSubmitClick = () => {

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
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button variant="primary" style={{ width: '100%' }} onClick={onSubmitClick}>Zaloguj</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
