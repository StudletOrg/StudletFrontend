// AppNavbar.tsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import FontSizeChanger from "./FontSizeChanger";
import Logo from "./Logo";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

interface AppNavbarProps {
  onLogout?: () => void;
}

export interface Student {
  firstname: string;
  lastname: string;
  email: string;
  dateofbirth: Date;
  id: number;
  roles: [string]
}

const AppNavbar: React.FC<AppNavbarProps> = ({ onLogout }) => {
    
    const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);
    const token = localStorage.getItem('jwtToken');
    const [student, setStudent] = React.useState<Student | null>(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/current_user`, {
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${token}`
        }
        })
        .then(response => {
        setStudent(response.data);
        localStorage.setItem('roles', JSON.stringify(response.data.roles));
        })
        .catch(error => {
        console.error("Błąd pobierania informacji:", error);
        });
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('roles');
        removeCookie("jwtToken", { path: "/" });
        setStudent(null);
        if (onLogout) {
          onLogout();
        }
    };
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-2 mt-2 rounded-1 shadow-lg" sticky="top">
        <Container>
            <Navbar.Brand as={Link} to="/dashboard" style={{ cursor: "pointer" }}>
            <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Zalogowano jako:&nbsp;
            </Navbar.Text>
            <Nav.Link as={Link} to="/me" className="me-2" style={{ fontWeight: "bold", textDecoration: "underline" }}>
                {student?.firstname} {student?.lastname}
            </Nav.Link>
            <div className="vr me-2"></div>
            <Nav.Link className="me-2" onClick={handleLogout}>Wyloguj</Nav.Link>
            <FontSizeChanger />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default AppNavbar;
