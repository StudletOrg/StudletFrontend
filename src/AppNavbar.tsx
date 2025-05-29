// AppNavbar.tsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import FontSizeChanger from "./FontSizeChanger";
import Logo from "./Logo";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

/**
 * Props for the AppNavbar component.
 * 
 * @interface AppNavbarProps
 * @property {function} [onLogout] - An optional callback function that is called when the user logs out. 
 * This function can be used to handle any additional logic required during the logout process.
 */
interface AppNavbarProps {
  onLogout?: () => void;
}

/**
 * Represents a student with personal information and roles.
 * 
 * @interface ThisStudent
 * @property {string} firstname - The first name of the student.
 * @property {string} lastname - The last name of the student.
 * @property {string} email - The email address of the student.
 * @property {Date} dateofbirth - The date of birth of the student.
 * @property {number} id - The unique identifier for the student.
 * @property {string[]} roles - An array of roles assigned to the student (e.g., ["student", "member"]).
 */
export interface ThisStudent {
  firstname: string;
  lastname: string;
  email: string;
  dateofbirth: Date;
  id: number;
  roles: [string]
}

/**
 * A navigation bar component that is used in the main application layout.
 *
 * This component assumes that the user is already authenticated and that the
 * authentication token is stored in the local storage under the key 'jwtToken'.
 *
 * The component displays the user name and a logout button. When the logout
 * button is clicked, the component removes the authentication token from the
 * local storage and calls the `onLogout` function if it is provided.
 *
 * @param {{ onLogout?: () => void }} props The component props.
 * @prop {() => void} [onLogout] A function that is called when the logout button is clicked.
 * @returns {ReactElement} A navigation bar React element.
 */
const AppNavbar: React.FC<AppNavbarProps> = ({ onLogout }) => {
    
    const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);
    const token = localStorage.getItem('jwtToken');
    const [student, setStudent] = React.useState<ThisStudent | null>(null);

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
