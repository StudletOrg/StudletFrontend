import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const defaultMenu  = [
  { path: "/dashboard", label: "Dashboard", icon: "🏠" },
  { path: "/grades", label: "Oceny", icon: "📚" },
  { path: "/subjects", label: "Zajęcia", icon: "📖" },
  { path: "/uczelnia", label: "Uczelnie", icon: "🎓" },
  { path: "/settings", label: "Ustawienia", icon: "⚙️" },
];

const professorExtras = [
  { path: "/teachergradestest", label: "Moje grupy", icon: "👥" },
  { path: "/teachergradestest", label: "Inne", icon: "📝" },
];

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

  const menuOptions = isProfessor
    ? [...defaultMenu, ...professorExtras]
    : defaultMenu;

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
