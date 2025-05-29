import logo from "./img/logo32.png";

/**
 * Logo component that displays the application logo and name.
 * 
 * This component renders an image and a text label side by side, 
 * representing the branding of the application.
 * 
 * @component
 * @returns {JSX.Element} The rendered Logo component, which includes an image 
 *                        and the application name.
 */
export default function Logo() {
  return (
    <div className="d-flex flex-row align-items-center">
      <img src={logo} alt="logo" className="rounded me-1" />
      <span>Studlet</span>
    </div>
  );
}
