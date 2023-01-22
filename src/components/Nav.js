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
        <NavLink className="navbar-brand" to="/KT-Portfolio">Keith S. Thomas</NavLink>
        <div>
          <NavLink to="/KT-Portfolio" className={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
          <NavLink to="/KT-Portfolio/portfolio" className={({ isActive }) => isActive ? activeClassName : undefined}>Portfolio</NavLink>
          <NavLink to="/KT-Portfolio/contact" className={({ isActive }) => isActive ? activeClassName : undefined}>Contact</NavLink>
          <NavLink to="/KT-Portfolio/resume" className={({ isActive }) => isActive ? activeClassName : undefined}>Resume</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/KT-Portfolio" element={<About />} />
        <Route path="/KT-Portfolio/portfolio" element={<Portfolio />} />
        <Route path="/KT-Portfolio/contact" element={<Contact />} />
        <Route path="/KT-Portfolio/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
};