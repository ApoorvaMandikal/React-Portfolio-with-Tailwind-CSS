import React, {useRef} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
    const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <About scrollToSection={scrollToSection} skillsRef={skillsRef} projectsRef={projectsRef} />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

