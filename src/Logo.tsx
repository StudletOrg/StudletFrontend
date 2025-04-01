import logo from "./img/logo32.png";

export default function Logo() {
  return (
    <div className="d-flex flex-row">
      <img src={logo} alt="logo" className="rounded me-1" />
      <span>Studlet</span>
    </div>
  );
}
