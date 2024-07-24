import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {   

  return (
    <section
      id="resume"
      className="flex flex-col pt-20 bg-cover bg-center h-screen bg-black"
      style={{ backgroundImage: 'url("./../images/black-mountains.png")' }}
    >
      <h2 className="text-center text-4xl text-white mb-8">Skills</h2>
      <div className="flex flex-col items-center space-y-20">
        <div className="container mx-auto px-4 w-9/12">
          <h3 className="text-2xl text-white mb-4">Skills</h3>
          <ul className="space-y-4 mt-4">
            {skills.map((skill, index) => (
              <li key={index} className="relative bg-gray-900 h-4 rounded mt-1">
                <div className="mt-1">
                  <div className="flex absolute left-2 text-white text-sm">
                    {skill.name}
                  </div>
                  <div
                    className="bg-blue-500 h-4 rounded "
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4 mt-8 md:mt-0">
          <div className="relative">
            <button className="bg-gray-700 text-white py-2 px-4 rounded w-full" >
            <a download="ApoorvaGMandikal.pdf" href="./resume/ApoorvaGMandikal.pdf">
              Download My Resume!
              </a>
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}
