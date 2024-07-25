import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar({ scrollToSection, aboutRef, skillsRef, projectsRef, contactRef }) {
    return (
      <header>
        <nav className="bg-gray-800 p-4 fixed w-full z-10">
          <ul className="flex justify-end space-x-4">
            <li>
              <button onClick={() => scrollToSection(aboutRef)} className="text-white">About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(skillsRef)} className="text-white">Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(projectsRef)} className="text-white">Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(contactRef)} className="text-white">Contact</button>
            </li>
          </ul>
        </nav>
        </header>
      );
}
