// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import Error from './Error';
import Home from './Home';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import { CookiesProvider } from 'react-cookie';

function About() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>About</h2>
        <Link className='App-link' to="/">Home</Link>
      </header>
    </div>
  );
}

export interface StyleContextData {
  
};

export const StyleContext = React.createContext<StyleContextData>({ });

function App() {
  return (
    <React.StrictMode>
      <StyleContext.Provider value={{ }}>
        <CookiesProvider>
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path="*" element={<Error />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </CookiesProvider>
      </StyleContext.Provider>
    </React.StrictMode>
  );
}

export default App;
