// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import Error from './Error';
import Home from './Home';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import GroupDetails from './GroupDetails';
import { CookiesProvider, useCookies } from 'react-cookie';
import { FontSizeType } from './FontSizeChanger';
import TeacherGrades from './TeacherGrades';

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

function Container() {
  const [style, setStyle, removeCookie] = useCookies(['fontSize']);
  const fontSize = style.fontSize as FontSizeType | undefined;
  if (fontSize === undefined) {
    setStyle('fontSize', 'normal', { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
  }

  return (
    <div className={`container ${fontSize ? "text-" + fontSize : "normal"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path="*" element={<Error />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/groups/:groupId" element={<GroupDetails />} />
        <Route path='/teachergradestest' element={<TeacherGrades />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <React.StrictMode>
      <CookiesProvider>
        <Container />
      </CookiesProvider>
    </React.StrictMode>
  );
}

export default App;
