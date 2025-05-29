import { useContext } from "react";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import { useCookies } from "react-cookie";
import { isExpired } from "react-jwt";

/**
 * Home component that determines whether to display the Dashboard or the LoginForm.
 * 
 * This component checks for the presence and validity of a JWT token in cookies
 * to determine if the user is logged in. If the token is valid, it renders the 
 * Dashboard; otherwise, it renders the LoginForm.
 * 
 * @component
 * @returns {JSX.Element} The rendered Home component, which conditionally displays 
 *                        either the Dashboard or the LoginForm based on the user's 
 *                        authentication status.
 */
function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);
  const loggedIn = cookies.jwtToken && !isExpired(cookies.jwtToken);

  console.log(cookies.jwtToken, isExpired(cookies.jwtToken));

  return (
    loggedIn ? <Dashboard /> : <LoginForm />
  );
}

export default Home;
