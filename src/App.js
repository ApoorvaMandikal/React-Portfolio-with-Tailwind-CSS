import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
    return(
        <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    )
}
