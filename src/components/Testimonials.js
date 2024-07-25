import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="text-center py-24 bg-gray-800 text-white">
      <h2 className="text-4xl font-semibold mb-8">Client Testimonials</h2>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-700 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <TerminalIcon className="h-8 w-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
            </div>
            <p className="text-lg">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

