import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

/**
 * Default menu options for the side navigation.
 * 
 * This array contains the default paths, labels, and icons for the main 
 * navigation items available to all users.
 * 
 * @constant {Array<{ path: string, label: string, icon: string }>}
 */
const defaultMenu  = [
  { path: "/dashboard", label: "Dashboard", icon: "🏠" },
  { path: "/universities", label: "Uczelnie", icon: "🎓" },
  { path: "/settings", label: "Ustawienia", icon: "⚙️" },
];

/**
 * Additional menu options for students.
 * 
 * This array contains the paths, labels, and icons for extra navigation 
 * items available specifically to users with the student role.
 * 
 * @constant {Array<{ path: string, label: string, icon: string }>}
 */
const studentExtras = [
  { path: "/subjects", label: "Zajęcia", icon: "📖" },
  { path: "/grades", label: "Oceny", icon: "📚" },
];

/**
 * Additional menu options for professors.
 * 
 * This array contains the paths, labels, and icons for extra navigation 
 * items available specifically to users with the professor role.
 * 
 * @constant {Array<{ path: string, label: string, icon: string }>}
 */
const professorExtras = [
  { path: "/teachergradestest", label: "Moje grupy", icon: "👥" },
  //{ path: "/teachergradestest", label: "Inne", icon: "📝" },
];

/**
 * SideMenu component that renders the navigation menu.
 * 
 * This component displays a vertical navigation menu based on the user's 
 * roles. It includes default menu options and additional options for 
 * professors. The active link is highlighted based on the current location.
 * 
 * @component
 * @returns {JSX.Element} The rendered SideMenu component containing navigation links.
 */
const SideMenu: React.FC = () => {
  const location = useLocation();

  const roles = localStorage.getItem("roles");
  let userRoles: string[] = [];

  try {
    if (roles) {
      userRoles = JSON.parse(roles);
    }
  } catch (err) {
    console.error("Błąd parsowania użytkownika z localStorage:", err);
  }

  const isProfessor = userRoles.includes("ROLE_PROFESSOR");

  var menuOptions = !isProfessor
    ? [...defaultMenu, ...studentExtras]
    : defaultMenu;

  menuOptions = isProfessor
    ? [...menuOptions, ...professorExtras]
    : menuOptions;

  return (
    <Nav defaultActiveKey={location.pathname} className="flex-column">
      {menuOptions.map((option, index) => (
        <Nav.Link
          key={index}
          as={Link}
          to={option.path}
          active={location.pathname === option.path}
        >
          {option.icon && <span className="me-2">{option.icon}</span>}
          {option.label}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default SideMenu;
