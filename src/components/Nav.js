import React from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";

export default function Nav() {
  let activeClassName = "nav-active";
  return (
    <Router>
      <nav>
        <NavLink className="navbar-brand" to="./">Keith S. Thomas</NavLink>
        <div>
          <NavLink to="" className={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
          <NavLink to="portfolio" className={({ isActive }) => isActive ? activeClassName : undefined}>Portfolio</NavLink>
          <NavLink to="contact" className={({ isActive }) => isActive ? activeClassName : undefined}>Contact</NavLink>
          <NavLink to="resume" className={({ isActive }) => isActive ? activeClassName : undefined}>Resume</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
};