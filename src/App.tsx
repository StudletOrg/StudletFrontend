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
import UserDetails from './UserDetails';
import AllGrades from './Grades';
import StudentGroups from './StudentGroups';
import TeacherGrades from './TeacherGrades';
import CreateNote from './CreateNote';
import AddGrade from './AddGrade';
import AddStudentToGroup from './AddStudentToGroup';

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

/**
 * A component that sets and manages the font size using cookies and renders the application routes.
 *
 * This component utilizes `react-cookie` to manage a cookie called 'fontSize'. If the cookie is not set,
 * it initializes the font size to 'normal' and sets an expiration date of one year from the current date.
 * The font size is applied as a class to the main container div.
 *
 * The component defines several routes for the application using `react-router-dom`.
 *
 * @returns {JSX.Element} A container with font size management and application routes.
 */

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
        <Route path='/grades' element={<AllGrades />} />
        <Route path='/subjects' element={<StudentGroups />} />
        <Route path="/groups/:groupId" element={<GroupDetails />} />
        <Route path="/me" element={<UserDetails />} />
        <Route path='/teachergradestest' element={<TeacherGrades />} />
        <Route path="/notes/new" element={<CreateNote />} /><Route path="/grades/add/:groupId/:studentId" element={<AddGrade />} />
        <Route path="/add-student-to-group" element={<AddStudentToGroup />} />
      </Routes>
    </div>
  );
}


/**
 * The main application component.
 *
 * This component is the root of the application and is responsible
 * for rendering the main layout.
 *
 * @returns {JSX.Element} The main application component.
 */
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
