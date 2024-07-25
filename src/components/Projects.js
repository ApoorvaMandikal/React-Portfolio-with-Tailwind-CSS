import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section
      id="projects"
      className="text-center py-24 px-4 bg-cover bg-center bg-slate-700"
    >
      <h2 className="text-4xl font-semibold text-black mb-24 border-b-2 border-white mx-auto max-w-4xl">
        Apps I've Built
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto mb-24">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 shadow-md rounded-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              className="w-full h-64 object-cover"
              src={project.image}
              alt={project.title}
            />
             <div className="p-4 bg-gray-900">
              <p className="text-2xl text-white">
                <span className="text-gray-600">&lt;</span>
                {project.title}
                <span className="text-gray-600">&gt;</span>
              </p>
              <p className="text-lg text-gray-400 mt-2">
                {project.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
          <a
            href="https://github.com/ApoorvaMandikal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-4 px-8 text-2xl font-semibold text-white bg-gray-800 rounded transition-transform hover:bg-red-500 hover:translate-x-1"
          >
            Show all
            <i className="fas fa-chevron-right ml-2"></i>
          </a>
        </section>
      );
    };    

