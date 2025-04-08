import { useContext } from "react";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import { useCookies } from "react-cookie";
import { isExpired } from "react-jwt";

function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);
  const loggedIn = cookies.jwtToken && !isExpired(cookies.jwtToken);

  console.log(cookies.jwtToken, isExpired(cookies.jwtToken));

  return (
    loggedIn ? <Dashboard /> : <LoginForm />
  );
}

export default Home;
