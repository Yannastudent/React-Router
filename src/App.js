import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './App.css';
import Welcome from './Welcome.js';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Welcome  name="Tatiana" Lastname="Vyazemskaya"/>
      <nav>
       <ul>
       <li><NavLink to="/home">Home</NavLink></li>
       <li><NavLink to="/contact">Contact</NavLink></li>
       <li><NavLink to="/projects">Projects</NavLink></li>
       <li><NavLink to="/about">About</NavLink></li>
      </ul>
      </nav>
      </header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path='home' element={<Home />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
