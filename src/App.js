import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './App.css';
import Welcome from './Welcome.js';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Welcome name="Tatiana" Lastname="Vyazemskaya" />
          {/*bootstrap */}
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand><img id="logo" src="/images/my_logo.png" alt="logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/home">Home</NavLink>
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  <NavLink className="nav-link" to="/projects">Projects</NavLink>
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </header>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
