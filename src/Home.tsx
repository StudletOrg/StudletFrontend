import { useContext } from "react";
import LoginForm from "./LoginForm";
import { LoginContext, LoginContextData } from "./App";
import Dashboard from "./Dashboard";

function Home() {
  let { loggedIn } = useContext(LoginContext);
  return (
      loggedIn ? <Dashboard /> : <LoginForm />
  );
}

export default Home;
