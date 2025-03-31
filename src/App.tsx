import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studlet - dzienik przyszłości</h1>
        <Link className='App-link' to="/about">About</Link>
      </header>
    </div>
  );
}

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

function Error() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>404</h2>
        <Link className='App-link' to="/">Back to Home</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.StrictMode>
  );
}

export default App;
